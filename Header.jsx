import React from "react";

export default function Header() {
  return (
    <header
      className="w-full h-[45vh] bg-cover bg-center relative shadow-lg flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold backdrop-blur-sm">
            LM
          </div>

          <h1 className="text-lg font-semibold text-white tracking-wide drop-shadow-lg">
            Modern Library Manager
          </h1>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-4xl font-bold text-white drop-shadow-xl tracking-wide">
          Welcome to Modern Library Manager
        </h2>
      </div>
    </header>
  );
}
