import AirtablePlus from "airtable-plus";

export default async function handler(req, res) {
  const EventsTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Events",
  });

  const events = await EventsTable.read({
    filterByFormula: "AND({Approval} = 'Approved', {Coordinates} != '')"
  });

  const eventsInfo = events.map((event) => ({
    name: event.fields["Event Name"],
    website: event.fields["Website"],
    lat: event.fields["Coordinates"].split(", ")[0],
    lng: event.fields["Coordinates"].split(", ")[1]
  }));

  return res.status(200).json(eventsInfo);
}