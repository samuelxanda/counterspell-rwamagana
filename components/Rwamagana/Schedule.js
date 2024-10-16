export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "7:00 AM", event: "Doors open" },
    { time: "8:00 PM", event: "Opening ceremony" },
    { time: "8:30 PM", event: "Breakfast" },
    { time: "9:00 PM", event: "Start working on your game!" },
    { time: "12:00 PM", event: "Gamedev workshop 1" },
    { time: "13:00 PM", event: "Lunch" },
    { time: "14:30 PM", event: "Start working on your game!" },
    { time: "15:15 PM", event: "Gamedev workshop 2" },
    { time: "8:00 PM", event: "Lightning talks" },
    { time: "12:00 AM", event: "Midnight surprise" },
    { time: "8:00 AM", event: "Breakfast" },
    { time: "10:30 AM", event: "Game demos!" },
    { time: "12:00 PM", event: "Closing ceremony" },
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
