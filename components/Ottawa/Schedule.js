export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "1:30 PM", event: "Doors open" },
    { time: "2:00 PM", event: "Icebreaker activities" },
    { time: "2:30 PM", event: "Opening ceremony" },
    { time: "4:00 PM", event: "Workshops" },
    { time: "6:00 PM", event: "Dinner" },
    { time: "8:00 PM", event: "Activity" },
    { time: "10:00 PM", event: "Workshops" },
    { time: "1:00 AM", event: "Activity" },
    { time: "7:00 AM", event: "Breakfast" },
    { time: "10:00 AM", event: "Game demos!" },
    { time: "12:00 PM", event: "Lunch" },
    { time: "1:00 PM", event: "Closing ceremony" },
    { time: "2:00 PM", event: "Event ends" },
  ];

  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
          {schedule.map((item, i) => (
            <div className="flex" key={i}>
              <p>{item.event}</p>
              <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
