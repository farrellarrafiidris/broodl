import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";

export default function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: "13:12:20",
    date: new Date().toDateString(),
  };

  const moods = {
    '&*@#$':'😭',
    'Sad':'🥲',
    'Existing':'😶',
    'Good':'😄',
    'Elated':'😍',
  }

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16 mx-5">
      <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500 rounded-xl">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p className="font-medium uppercase text-xs sm:text-sm truncate">{status.replaceAll('_', ' ')}</p>
              <p className="font-fugaz text-base sm:text-lg truncate">{statuses[status]}</p>
            </div>
          );
        })}
      </div>
      <h4 className="font-fugaz text-5xl sm:text-7xl mx-auto text-center">How do you <span className="textGradient">feel</span> today?</h4>
      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return(
            <button key={moodIndex} className={'p-4 rounded-xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 flex-1' }>
              <p className="text-4xl sm:text-5xl md:text-6xl pb-2">{moods[mood]}</p>
              <p className="font-fugaz text-indigo-500 text-xs sm:text-sm md:text-base">{mood}</p>
            </button>
          )
        })}
      </div>
      <Calendar/>
    </div>
  );
}
