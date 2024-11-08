import React, { useState, useEffect } from "react";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(
          "https://adamxu.net/counterspell/schedule.json?t=${timestamp}"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schedule");
        }
        const data = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error("Error fetching schedule:", error);
        // Optionally, set a default schedule or show an error message
      }
    };

    fetchSchedule();
  }, []);

  return (
    <>
      <h2
        className="text-center text-4xl uppercase retro text-whitepurp"
        id="schedule"
      >
        Schedule
      </h2>
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
