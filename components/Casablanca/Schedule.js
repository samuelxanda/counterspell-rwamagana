export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const scheduleDay1 = [
    { time: "9:00 AM", event: "Doors open" },
    { time: "9:40 AM", event: "Opening ceremony" },
    { time: "9:50 AM", event: "Start working on your game!" },
    { time: "11:00 AM", event: "Gamedev workshop 1" },
    { time: "1:00 PM", event: "Lunch" },
    { time: "2:30 PM", event: "Activity 1" },
    { time: "4:00 PM", event: "Gamedev workshop 2" },
    { time: "5:00 PM", event: "Lightning talks" },
    { time: "6:00 PM", event: "End of Day 1" },
  ];

  const scheduleDay2 = [
    { time: "10:00 AM", event: "Start of Day 2" },
    { time: "10:30 AM", event: "Continue working on your game!" },
    { time: "11:10 AM", event: "Gamedev workshop 3" },
    { time: "12:30 PM", event: "Lunch" },
    { time: "1:30 PM", event: "Activity 2" },
    { time: "2:30 PM", event: "Gamedev workshop 4" },
    { time: "5:00 PM", event: "Dinner" },
    { time: "6:00 PM", event: "Game demos!" },
    { time: "7:00 PM", event: "Closing ceremony" },
  ];

  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
        <div className="py-10 text-xl uppercase retro">
            <p>Day 1 (<a className="text-pink" href="https://shorturl.at/VlMGi" target="_blank">Subrini Val Fleuri, Casablanca</a>)</p>
          </div>
          {scheduleDay1.map((item, i) => (
            <div className="flex" key={i}>
              <p>{item.event}</p>
              <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>
              <p>{item.time}</p>
            </div>
          ))}
          <div className="py-10 text-xl uppercase retro">
            <p>Day 2 (<a className="text-pink" href="https://shorturl.at/jIC9c" target="_blank">ALX Morocco, Casablanca Technopark</a>)</p>
          </div>
          {scheduleDay2.map((item, i) => (
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
