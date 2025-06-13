import React from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Operations Manager, TechServe Solutions",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    content:
      "MyHisaab transformed how we track our field staff attendance. The AI verification ensures accountability, and the real-time tracking helps us optimize workflows.",
  },
  {
    name: "Priya Sharma",
    role: "CEO, Innovate Retail",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    content:
      "The WhatsApp reporting feature is a game-changer. I get daily attendance summaries without having to log into any system. Perfect for busy executives like me.",
  },
  {
    name: "Amit Patel",
    role: "HR Director, GlobalTech India",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
    content:
      "We've tried several attendance systems, but MyHisaab stands out with its ease of use and powerful features. The support team is incredibly responsive too.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Client Feedback</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it – hear from businesses that have transformed their workforce management with MyHisaab.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-8 flex flex-col h-full">
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
                {[...Array(5 - t.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">"{t.content}"</p>
              <div className="flex items-center mt-auto">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-extrabold text-xl text-gray-900">{t.name}</div>
                  <div className="text-gray-500 text-base">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
