import NestCat from "./components/NestCat";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D14] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#E0234E 1px, transparent 1px), linear-gradient(90deg, #E0234E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #E0234E 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Top badge */}

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2 text-center">
        Nest<span className="text-[#E0234E]">Cat</span>
      </h1>

      {/* Cat */}
      <NestCat />

      {/* Tech stack pill */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3"></div>
    </div>
  );
}
