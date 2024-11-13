import AirtablePlus from "airtable-plus";

// defaults to required string
// types: string, phone, email, number, multi_select, single_select, date
const schema = [
  {
    name: "Legal Name",
    type: "string",
  },
  {
    name: "Preferred Name",
    type: "string",
    required: false,
  },
  {
    name: "Email",
    type: "email",
  },
  {
    name: "Pronouns",
    type: "multi_select",
    required: false,
    options: [
      "he/him",
      "she/her",
      "they/them",
      "he/they",
      "she/they",
      "any",
      "any ig",
    ],
    other: true,
  },
  {
    name: "DOB",
    type: "date",
  },
  {
    name: "Phone Number",
    type: "phone",
    required: false,
  },
  {
    name: "Address Line 1",
    type: "string",
  },
  {
    name: "Address Line 2",
    type: "string",
    required: false,
  },
  {
    name: "City",
    type: "string",
  },
  {
    name: "State/Province/Territory",
    type: "string",
  },
  {
    name: "Country",
    type: "string",
  },
  {
    name: "Postal Code",
    type: "string",
  },
  {
    name: "Dietary Restrictions",
    type: "string",
    required: false,
  },
  {
    name: "T-Shirt Size",
    type: "single_select",
    options: [
      "Extra Small",
      "Small",
      "Medium",
      "Large",
      "Extra Large",
      "I don't care",
      "I don't want a T-shirt",
    ],
  },
  {
    name: "Parent Name",
    type: "string",
  },
  {
    name: "Parent Email",
    type: "email",
  },
  {
    name: "Parent Phone Number",
    type: "phone",
  },
  {
    name: "Referral",
    type: "string",
    required: false,
  },
  {
    name: "Experience",
    type: "single_select",
    options: ["Yes, in-person", "Yes, virtually", "No"],
    required: false,
  },
  {
    name: "Comments",
    type: "string",
    required: false,
  },
  {
    name: "Custom Data",
    type: "string",
    required: false,
  },
];

export async function register(data) {
  const ParticipantTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Participants",
  });

  console.debug(`Registering participant`);

  // jank to get around airtable-plus not supporting typecast
  const { tableName, base } = ParticipantTable._mergeConfig();
  return await base(tableName).create(data, { typecast: true });
}

export default async function handler(req, res) {
  let { city } = req.query;

  if (req.method === "GET") {
    return res.status(200).json({
      message: "POST to this endpoint to register a participant",
      schema,
    });
  } else if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  if (req.headers["content-type"] !== "application/json") {
    return res.status(400).json({
      ok: false,
      error: "Invalid content-type. Must be application/json",
    });
  }

  const allowedKeys = schema.map((field) => field.name);
  const requiredKeys = schema
    .filter((field) => field.required || field.required === undefined)
    .map((field) => field.name);

  let body = req.body;

  const testing = body["testing"];
  delete body["testing"];

  const bodyKeys = Object.keys(body);

  const EventsTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Events",
  });

  const events = await EventsTable.read({
    filterByFormula: "{Approval} = 'Approved'",
  });
  const eventNames = events.map((event) => event.fields["Event Name"]);
  const eventSlugs = eventNames.map((name) =>
    name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.\(\)]/g, "")
      .toLowerCase()
      .trim()
      .replace(/ /g, "-")
  );

  if (!eventSlugs.includes(city)) {
    return res.status(400).json({
      ok: false,
      error: "Invalid city",
      valid_cities: eventSlugs,
    });
  }
  const linkedEvent = events[eventSlugs.indexOf(city)];

  const errors = [];
  const warnings = [];

  // Check for required fields
  requiredKeys.forEach((key) => {
    if (!bodyKeys.includes(key)) {
      errors.push({
        name: key,
        message: "This field is required",
        type: schema.find((field) => field.name === key).type,
      });
    }
    if (bodyKeys.includes(key) && body[key] === "") {
      errors.push({
        name: key,
        message: "This field is required",
        type: schema.find((field) => field.name === key).type,
      });
    } else if (
      bodyKeys.includes(key) &&
      schema.find((field) => field.name === key).type === "multi_select" &&
      body[key].length === 0
    ) {
      errors.push({
        name: key,
        message: "This field is required",
        type: schema.find((field) => field.name === key).type,
      });
    }
  });

  // Check for unknown fields
  bodyKeys.forEach((key) => {
    if (!allowedKeys.includes(key)) {
      warnings.push({
        name: key,
        message: "This field is not recognized",
      });
    }
  });

  // Check for invalid data types
  schema.forEach((field) => {
    if (bodyKeys.includes(field.name)) {
      const value = body[field.name];
      const type = field.type;

      if (type === "email") {
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          errors.push({
            name: field.name,
            message: "Invalid email address",
            type,
          });
        }
      } else if (type === "phone") {
        if (!value.match(/^\+?[0-9\(\)\- ]+$/)) {
          errors.push({
            name: field.name,
            message: "Invalid phone number",
            type,
          });
        }
      } else if (type === "number") {
        if (isNaN(value)) {
          errors.push({
            name: field.name,
            message: "Not a number",
            type,
          });
        }
      } else if (type === "date") {
        if (isNaN(Date.parse(value))) {
          errors.push({
            name: field.name,
            message: "Invalid date",
            type,
          });
        }
      } else if (type === "multi_select") {
        if (!Array.isArray(value)) {
          errors.push({
            name: field.name,
            message: "This field must be an array",
            type,
          });
        } else if (!field.other) {
          let invalid = [];
          value.forEach((item) => {
            if (!field.options.includes(item)) {
              invalid.push(item);
            }
          });
          if (invalid.length > 0) {
            errors.push({
              name: field.name,
              message: "Invalid choices",
              values: invalid,
            });
          }
        }
      } else if (type === "single_select") {
        if (!field.options.includes(value)) {
          errors.push({
            name: field.name,
            message: "Invalid choice",
          });
        }
      }
    }
  });

  // sort errors and warnings to match the order of the schema for readability
  errors.sort(
    (a, b) => allowedKeys.indexOf(a.name) - allowedKeys.indexOf(b.name)
  );
  warnings.sort(
    (a, b) => allowedKeys.indexOf(a.name) - allowedKeys.indexOf(b.name)
  );

  if (errors.length > 0) {
    return res.status(400).json({
      ok: false,
      message: testing
        ? "REMOVE IN PRODUCTION. This is a test and if success, the participant will not be registered."
        : undefined,
      errors,
      warnings: warnings.length > 0 ? warnings : undefined,
    });
  }

  // filter out any keys that aren't in the schema
  body = Object.fromEntries(
    Object.entries(body).filter(([key, value]) => allowedKeys.includes(key))
  );

  body["Event Name"] = city;
  body["Events Link"] = [linkedEvent.id];

  if (testing) {
    return res.json({
      ok: true,
      message:
        "REMOVE IN PRODUCTION. Registration would have been successful, but this is a test and the participant was not actually registered",
      warnings: warnings.length > 0 ? warnings : undefined,
    });
  }

  try {
    await register(body);

    return res.json({
      ok: true,
      message: "Registration successful",
      warnings: warnings.length > 0 ? warnings : undefined,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      ok: false,
      error: "Internal server error",
    });
  }
}
