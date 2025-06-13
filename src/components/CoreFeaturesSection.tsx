import React from "react";

export function CoreFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Core Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential tools designed to simplify and streamline your workforce management.
          </p>
        </div>
        {/* Feature Card */}
        <div className="flex flex-col lg:flex-row items-center justify-center bg-yellow-50 rounded-2xl border border-yellow-100 shadow-sm p-8 gap-8 max-w-5xl mx-auto relative">
          {/* Left: Icon and Details */}
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl">
                <span>⚡</span>
              </div>
              <span className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">★ FEATURED</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Offline Live Tracking</h3>
            <p className="text-gray-700 mb-6">
              Revolutionary technology that tracks your workforce even without internet connection. Data syncs automatically when connection is restored.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 text-sm shadow border border-yellow-100">
                <span className="text-yellow-400">📶</span> Works Offline
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 text-sm shadow border border-yellow-100">
                <span className="text-yellow-400">🔄</span> Auto Sync
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 text-sm shadow border border-yellow-100">
                <span className="text-yellow-400">📍</span> GPS Tracking
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 text-sm shadow border border-yellow-100">
                <span className="text-yellow-400">⏰</span> Real-time Updates
              </div>
            </div>
          </div>
          {/* Right: Phone Mockup */}
          <div className="flex-1 flex justify-center items-center min-w-[300px]">
            <div className="relative bg-white rounded-3xl shadow-lg border-4 border-black w-72 h-96 flex flex-col overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between bg-yellow-400 px-4 py-2">
                <span className="text-white font-semibold">MyHisaab</span>
                <span className="text-white text-xs">Offline</span>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center items-center px-4 py-6 bg-gradient-to-b from-yellow-50 to-white">
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50 Q 60 10 110 40" stroke="#FACC15" strokeWidth="3" fill="none" strokeDasharray="6 6" />
                  <circle cx="20" cy="44" r="5" fill="#FACC15" />
                  <circle cx="50" cy="28" r="5" fill="#FACC15" />
                  <circle cx="80" cy="22" r="5" fill="#FACC15" />
                  <circle cx="110" cy="40" r="5" fill="#FACC15" />
                </svg>
              </div>
              {/* List */}
              <div className="bg-white px-4 py-2 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-7 h-7 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold text-sm">JD</span>
                  <span className="text-xs text-gray-700 flex-1">John Doe Tracked Offline</span>
                  <span className="text-xs text-gray-400">2 min ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-yellow-400 text-white flex items-center justify-center font-bold text-sm">JS</span>
                  <span className="text-xs text-gray-700 flex-1">Jane Smith Location Saved</span>
                  <span className="text-xs text-gray-400">5 min ago</span>
                </div>
              </div>
            </div>
            {/* Green Check Floating Icon */}
            <span className="absolute top-4 right-4 bg-green-400 text-white rounded-full p-2 shadow-lg border-4 border-white">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 