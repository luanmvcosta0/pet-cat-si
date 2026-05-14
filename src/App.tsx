import NestCat from "./components/NestCat";

export default function App() {
  return (
    <div className="h-screen bg-[#0D0D14] flex flex-col items-center justify-between overflow-hidden px-6 py-6 relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E0234E 1px, transparent 1px), linear-gradient(90deg, #E0234E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #E0234E 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Nest<span className="text-[#E0234E]">Cat</span>
        </h1>
        <p className="text-white/40 text-sm md:text-base font-light mt-2">
          Resolução de Problemas Estruturados em Computação
        </p>
      </div>

      {/* Main content — side by side */}
      <div className="relative z-10 flex flex-1 items-center justify-center gap-10 md:gap-16 w-full max-w-4xl">
        {/* Left: inspiration info */}
        <div className="flex flex-col items-center gap-5 max-w-[280px] text-center">
          <div className="w-64 h-20 rounded-xl border border-[#E0234E]/30 bg-[#E0234E]/8 flex items-center justify-center px-4 py-2">
            <img
              src="/nest-logo.png"
              alt="Logo NestJS"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-px h-6 bg-[#E0234E]/30" />

          <p className="text-white/70 text-base leading-relaxed font-light">
            Este mascote gato foi{" "}
            <span className="text-[#E0234E] font-medium">
              inspirado na logo
            </span>{" "}
            do framework{" "}
            <span className="text-white font-semibold">NestJS</span>, um
            framework Node.js para construção de aplicações server-side.
          </p>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-56 bg-[#E0234E]/15" />

        {/* Right: cat */}
        <div className="scale-90 md:scale-110 origin-center flex-shrink-0">
          <NestCat />
        </div>
      </div>
    </div>
  );
}
