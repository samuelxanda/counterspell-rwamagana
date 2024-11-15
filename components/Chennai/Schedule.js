export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "08:30 AM", event: "Doors open" },
    { time: "09:00 AM", event: "Opening ceremony" },
    { time: "09:30 AM", event: "Team formation & brainstorming" },
    { time: "10:00 AM", event: "Gamedev workshop 1" },
    { time: "11:00 AM", event: "Start working on your game!" },
    { time: "12:30 PM", event: "Lunch" },
    { time: "1:00 PM", event: "Continue working on your game" },
    { time: "2:00 PM", event: "Gamedev workshop 2" },
    { time: "4:00 PM", event: "Fun activity" },
    { time: "5:00 PM", event: "Continue working / Mentoring sessions" },
    { time: "6:00 PM", event: "Dinner" },
    { time: "7:00 PM", event: "Prepare for game demos" },
    { time: "8:00 PM", event: "Game demos!" },
    { time: "8:45 PM", event: "Closing ceremony & Awards" },
    { time: "9:00 PM", event: "Event ends" },
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
