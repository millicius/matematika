'use client'

import { useState } from "react"

export default function Home() {

 const [skaicius1, setSkaicius1] = useState("Y")
 const [skaicius2, setSkaicius2] = useState("X")

 function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min) + min) + 1;
}

const handleClick = () => {
  setSkaicius1(randomNumberInRange(10, 29));
  setSkaicius2(randomNumberInRange(30, 99));
};

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <button className="border border-slate-950 bg-slate-300 px-8 py-2 mb-9 rounded" onClick={handleClick}>Roll</button>
      <div className="flex text-6xl">
        <div className="flex items-center content-center px-1 text-black"><p>-</p></div>
        <div className="px-2 border-b border-slate-950">
          <div className="px-1">{skaicius2}</div>
          <div className="text-right px-1">{skaicius1}</div>
        </div>
      </div>
    </main>
  )
}
