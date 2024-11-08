export default function Schedule() {
  const schedule = [
    { time: "8:30 AM", event: "Doors open" },
    { time: "9:00 AM", event: "Opening ceremony" },
    { time: "9:30 AM", event: "Hacking begins!" },
    { time: "10:00 AM", event: "Scratch Workshop" },
    { time: "11:00 AM", event: "Sprig Workshop" },
    { time: "12:00 PM", event: "Lunch is served!" },
    { time: "3:30 PM", event: "Hacking ends" },
    { time: "5:00 PM", event: "Closing ceremony" },
    { time: "6:00 PM", event: "Event ends :(" },
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
