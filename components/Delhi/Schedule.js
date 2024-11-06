export default function Schedule() {
  const schedule = [
    { time: "8:00 AM", event: "Doors open" },
    { time: "8:20 PM", event: "Opening ceremony" },
    { time: "9:00 AM", event: "Introductions & Team Formation" },
    { time: "9:30 AM", event: "Start working on game!" },
    { time: "10:30 AM", event: "Breakfast" },
    { time: "11:30 AM", event: "Workshop 1" },
    { time: "1:00 PM", event: "Photoshoot" },
    { time: "1:30 PM", event: "Lunch" },
    { time: "4:00 PM", event: "Workshop 2" },
    { time: "5:30 PM", event: "Submissions Open" },
    { time: "6:00 PM", event: "Submissions Close" },
    { time: "6:00 PM", event: "Judges Review" },
    { time: "6:45 PM", event: "Prize Distribution" },
    { time: "7:10 PM", event: "Closing ceremony" },
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