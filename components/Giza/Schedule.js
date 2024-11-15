export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "7:00 AM", event: "Doors open" },
    { time: "8:00 AM", event: "Opening ceremony" },
    { time: "8:30 AM", event: "Breakfast" },
    { time: "9:00 AM", event: "Start working on your game!" },
    { time: "10:00 AM", event: "Gamedev workshop 1" },
    { time: "12:00 PM", event: "Gamedev workshop 2 (+ Activity)" },
    { time: "2:00 PM", event: "Lunch" },
    { time: "4:30 PM", event: "Lightning talks" },
    { time: "6:30 PM", event: "Game demos!" },
    { time: "7:00 PM", event: "Dinner" },
    { time: "8:00 PM", event: "Closing ceremony" },
    { time: "8:00 AM", event: "Doors open" },
    { time: "9:00 AM", event: "Opening ceremony" },
    { time: "9:30 AM", event: "Breakfast" },
    { time: "10:00 AM", event: "Start working on your game!" },
    { time: "11:00 AM", event: "Gamedev workshop 1" },
    { time: "1:00 PM", event: "Gamedev workshop 2" },
    { time: "1:00 PM", event: "Activity 1" },
    { time: "3:00 PM", event: "Lunch" },
    { time: "5:30 PM", event: "Lightning talks" },
    { time: "7:30 PM", event: "Game demos!" },
    { time: "8:00 PM", event: "Dinner" },
    { time: "9:00 PM", event: "Closing ceremony" },
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
