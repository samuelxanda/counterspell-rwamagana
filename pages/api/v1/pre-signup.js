import AirtablePlus from "airtable-plus";
import Airtable from "airtable";

export async function signup(email, event) {
  const preSignupTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Pre-signups",
  });

  console.debug(`Pre-signing up "${email}" for "${event}"`);

  return preSignupTable.create({
    Email: email,
    "Event Name": event,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  const { email, event } = req.body;

  if (!email) {
    return res.status(400).json({
      ok: false,
      error: "Missing required fields",
    });
  }

  try {
    await signup(email, event);

    return res.json({
      ok: true,
    });
  } catch (error) {
    if (error instanceof Airtable.Error) {
      console.error(error);

      return res.status(400).json({
        ok: false,
        error: "Bad request",
      });
    }
    console.error(error);

    return res.status(500).json({
      ok: false,
      error: "Internal server error",
    });
  }
}
