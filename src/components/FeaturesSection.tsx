import React from "react";

const features = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl">
        <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><circle cx="12" cy="12" r="3"/><path d="M12 7v.01"/></svg>
      </span>
    ),
    title: "AI-Powered Selfie Verification",
    description: "Advanced facial recognition technology ensures accurate employee identity verification.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl">
        <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"/><path d="M12 2v2m0 16v2m8-10h2M2 12H4m15.07 7.07l1.42 1.42M4.93 4.93L3.51 3.51m15.07 0l1.42 1.42M4.93 19.07l-1.42 1.42"/></svg>
      </span>
    ),
    title: "Smart Geo-Fencing",
    description: "Create virtual boundaries around work locations for automatic attendance tracking.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl">
        <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      </span>
    ),
    title: "Real-Time Task Management",
    description: "Assign, track, and monitor tasks with comprehensive progress tracking.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl">
        <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M9 9h6v6H9z"/></svg>
      </span>
    ),
    title: "Advanced Analytics",
    description: "Generate detailed reports on attendance patterns and productivity metrics.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl">
        <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
      </span>
    ),
    title: "WhatsApp Integration",
    description: "Receive daily attendance summaries and alerts directly through WhatsApp.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl">
        <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7c0 6 8 10 8 10z"/></svg>
      </span>
    ),
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and secure data storage.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start hover:shadow-lg transition-shadow border border-gray-100"
            >
              {feature.icon}
              <h3 className="mt-6 mb-2 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-md transition-colors">
            View All Features
          </button>
        </div>
      </div>
    </section>
  );
}
