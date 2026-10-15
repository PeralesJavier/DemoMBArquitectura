// components/shared/Mark.tsx

export function Mark({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 ${light ? "text-white" : "text-[#353535]"}`}
      aria-label="MB Arquitectura"
    >
      <span className="text-3xl font-light tracking-[-0.15em] leading-none">
        <i className="text-[#f4d20b] not-italic">|</i>MB
      </span>
      <span
        className={`hidden border-l pl-2 text-[9px] uppercase tracking-[0.24em] sm:block ${light ? "border-white/40" : "border-black/20"}`}
      >
        Arquitectura
        <br />
        S.A.
      </span>
    </div>
  );
}