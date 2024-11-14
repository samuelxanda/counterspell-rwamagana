export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "09:00 AM", event: "Doors open" },
    { time: "10:00 AM", event: "Opening ceremony" },
    { time: "11:00 AM", event: "Breakfast" },
    { time: "12:00 PM", event: "Event Starts!" },
    { time: "1:00 PM", event: "Activity 1" },
    { time: "2:00 PM", event: "Gamedev Workshop 1" },
    { time: "3:00 PM", event: "Lunch" },
    { time: "4:00 PM", event: "Gamedev workshop 2" },
    { time: "5:00 PM", event: "Activity 2" },
    { time: "7:00 PM", event: "Dinner" },
    { time: "8:00 PM", event: "Closing ceremony" },
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
