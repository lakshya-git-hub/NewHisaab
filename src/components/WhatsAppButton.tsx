import React from "react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "1234567890";
    const message = "Hi! I'm interested in learning more about MyHisaab.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex items-center justify-center">
        {/* Pulsing Green Ring */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-20 animate-ping"></span>
        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
        >
          {/* WhatsApp SVG Icon */}
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a8.933 8.933 0 01-4.548-1.252l-.326-.194-3.377.893.902-3.292-.213-.338a8.922 8.922 0 01-1.37-4.788c.001-4.962 4.037-8.998 9-8.998 2.406 0 4.663.936 6.364 2.637a8.924 8.924 0 012.635 6.363c-.003 4.962-4.039 8.998-9.001 8.998m7.539-16.498A10.92 10.92 0 0012.05 1.999C6.477 2 1.999 6.477 2 12.053c0 2.123.555 4.199 1.607 6.032L2.05 22l3.988-1.053a10.96 10.96 0 005.992 1.751h.005c5.572 0 10.051-4.477 10.053-10.049a9.936 9.936 0 00-2.925-7.027" />
          </svg>
          {/* Red Notification Dot */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </div>
  );
}
