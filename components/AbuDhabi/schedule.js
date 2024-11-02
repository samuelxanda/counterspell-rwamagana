export default function Schedule() {
    // TODO: Edit this to match your event schedule
    const schedule = [
      { time: "8:30 AM", event: "🚪 Doors open" },
      { time: "9:30 AM", event: "👐 Opening ceremony" },
      { time: "9:45 AM", event: "🤖 Hacking begins" },
      { time: "10:00 AM", event: "Workshop A" },
      { time: "11:00 AM", event: "Workshop B" },
      { time: "12:00 PM", event: "🥪 Lunch" },
      { time: "2:00 PM", event: "🎯 Activity" },
      { time: "3:30 PM", event: "Workshop C" },
      { time: "4:30 PM", event: "?? Mystery ??" },
      { time: "5:00 PM", event: "Workshop D" },
      { time: "6:30 PM", event: "🛑 Project wrap-up" },
      { time: "7:00 PM", event: "🍕 Dinner" },
      { time: "7:30 PM", event: "📺 Project demos" },
      { time: "8:15 PM", event: "🗳️ Closing + voting" },
      { time: "9:00 PM", event: "💔 Goodbye :)" },
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