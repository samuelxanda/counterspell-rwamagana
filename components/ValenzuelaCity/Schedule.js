export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "TO_BE_ANNOUCED", event: "Doors open" },
    { time: "NONE", event: "Opening ceremony" },
    { time: "NONE", event: "Breakfast" },
    { time: "NONE", event: "Ice Breaker" },
    { time: "NONE", event: "Gamedev workshop 1" },
    { time: "NONE", event: "Make a team or find one" },
    { time: "NONE", event: "Gamedev workshop 2" },
    { time: "NONE", event: "Lunch" },
    { time: "NONE", event: "Start working with your game" },
    { time: "NONE", event: "Snacks" },
    { time: "NONE", event: "More Game dev" },
    { time: "NONE", event: "Game demos!" },
    { time: "NONE", event: "Closing ceremony" },
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
