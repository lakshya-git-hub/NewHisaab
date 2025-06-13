import React, { useState } from "react";

function PricingHeader({ isYearly, setIsYearly, employeeCount, setEmployeeCount, coupon, setCoupon }) {
  return (
    <div className="flex flex-col items-center mb-12">
      <span className="bg-yellow-100 text-yellow-600 font-bold px-5 py-2 rounded-full text-sm mb-4">Packages</span>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">Choose Your Perfect Plan</h2>
      <p className="text-gray-500 text-lg mb-6 text-center max-w-xl">Transparent pricing with no hidden fees. Scale your plan as your business grows.</p>
      {/* Toggle */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-2">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${isYearly ? "text-yellow-500 bg-white" : "text-gray-500"}`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${!isYearly ? "text-yellow-500 bg-white" : "text-gray-500"}`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
      </div>
      {isYearly && (
        <span className="bg-green-200 text-green-700 font-semibold px-4 py-1 rounded-full text-xs mb-4">Save up to 67% with yearly billing</span>
      )}
      {/* Employee Counter */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center mb-4 w-full max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span className="font-bold text-lg text-gray-900">Number of Employees</span>
        </div>
        <div className="flex items-center gap-6 mb-1">
          <button
            className="w-8 h-8 rounded-full bg-gray-100 text-2xl font-bold flex items-center justify-center text-yellow-500"
            onClick={() => setEmployeeCount(Math.max(5, employeeCount - 5))}
          >-</button>
          <span className="text-2xl font-bold text-gray-900">{employeeCount}</span>
          <button
            className="w-8 h-8 rounded-full bg-gray-100 text-2xl font-bold flex items-center justify-center text-yellow-500"
            onClick={() => setEmployeeCount(employeeCount + 5)}
          >+</button>
        </div>
        <span className="text-xs text-gray-400">Minimum 5 employees, increments of 5</span>
      </div>
      {/* Coupon */}
      <div className="flex flex-col items-center w-full max-w-md mb-2">
        <a href="#" className="text-gray-500 text-sm underline mb-2">Have a coupon code?</a>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
            className="flex-1 rounded-l-xl border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 bg-white"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 rounded-r-xl transition-colors">Apply</button>
        </div>
      </div>
    </div>
  );
}

  const plans = [
    {
      name: "Basic Plan",
    description: "Perfect for small businesses and startups",
    price: "₹600",
    total: "₹3,000",
    totalNote: "For 5 employees",
    per: "per employee/year",
    button: "Add to Cart",
      features: [
      "AI-based Selfie Verification",
      "WhatsApp Daily Reporting",
      "Multiple Geo-Fencing",
      "Multiple Branch Management",
      "Loan and Advance option",
      "Download payslip through single click",
      "Basic Analytics",
      "Email Support",
    ],
    highlight: false,
    },
    {
      name: "Professional Plan",
    description: "For growing teams with advanced needs",
    price: "₹1200",
    total: "₹6,000",
    totalNote: "For 5 employees",
    per: "per employee/year",
    button: "Add to Cart",
      features: [
      "All Basic Plan Features",
      "Real time monitoring",
      "KM Tracking through Odometer",
      "Battery Percentages in Live Tracking",
      "Google Maps Integration",
      "Real-Time Workforce Control",
      "Advanced Reporting & Analytics",
      "Priority Support",
    ],
    highlight: true,
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const [employeeCount, setEmployeeCount] = useState(5);
  const [coupon, setCoupon] = useState("");

  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <PricingHeader
          isYearly={isYearly}
          setIsYearly={setIsYearly}
          employeeCount={employeeCount}
          setEmployeeCount={setEmployeeCount}
          coupon={coupon}
          setCoupon={setCoupon}
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-8 shadow-md border ${plan.highlight ? "border-yellow-400" : "border-gray-200"} flex flex-col ${plan.highlight ? "pt-12" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 w-full flex justify-center">
                  <div className="bg-yellow-400 text-white text-sm font-bold px-6 py-2 rounded-t-2xl flex items-center gap-2">
                    <span className="text-lg">★</span> Most Popular
        </div>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-yellow-500 text-4xl font-extrabold mb-1">{plan.price}</div>
                <div className="text-gray-500 mb-2">{plan.per}</div>
                <div className="bg-yellow-50 rounded-xl p-4 mb-4 flex flex-col items-center">
                  <div className="flex items-center gap-2 text-yellow-400 font-bold mb-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
                    Total Cost
                  </div>
                  <div className="text-2xl font-bold text-yellow-500">{plan.total} <span className="text-base text-gray-500 font-normal">per year</span></div>
                  <div className="text-xs text-gray-400">{plan.totalNote}</div>
                </div>
                <button className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 border ${plan.highlight ? "bg-yellow-400 text-white border-yellow-400" : "border-yellow-400 text-yellow-500 bg-white"} mb-6 transition-colors`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6h15M6 12h15M6 18h15M3 6h.01M3 12h.01M3 18h.01"/></svg>
                  {plan.button}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-white border border-yellow-400 text-yellow-500 font-bold py-3 px-8 rounded-xl text-lg shadow-sm hover:bg-yellow-50 transition-colors">
            View All Features
          </button>
        </div>
      </div>
    </section>
  );
}
