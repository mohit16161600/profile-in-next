"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-orange-800/50 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-bold hover:bg-orange-800 transition-all border border-orange-400/30 text-lg"
    >
      Save This Guide (PDF)
    </button>
  );
}
