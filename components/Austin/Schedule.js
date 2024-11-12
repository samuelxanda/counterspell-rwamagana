export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "11:00 AM", event: "Doors open" },
    { time: "11:30 AM", event: "Opening ceremony" },
    { time: "12:00 PM", event: "Lunch and start working on your game!" },
    { time: "2:00 PM", event: "Sprig Workshop" },
    { time: "4:00 PM", event: "Karaoke" },
    { time: "5:00 PM", event: "Art workshop & Bug squashing help" },
    { time: "6:00 PM", event: "Dinner" },
    { time: "8:00 PM", event: "Boba Drops" },
    { time: "10:00 PM", event: "Peer judging and prizes" },
    { time: "11:00 PM", event: "Event ends" },
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
