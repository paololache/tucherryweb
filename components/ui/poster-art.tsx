import type { ServiceId } from "@/lib/site";

/** Ilustraciones planas por servicio, solo con la paleta de Tu Cherry. No usan el isologo. */
const C = { cherry: "#80031e", wine: "#5e0216", butter: "#fee09e", porcelain: "#f8f7f5", sage: "#ccd39f", cream: "#f8f4cf" };

const BG: Record<ServiceId, string> = {
  estrategia: C.wine,
  branding: C.butter,
  redes: C.sage,
  ads: C.cream,
  web: C.butter,
  audiovisual: C.sage,
};

export function PosterArt({ kind, className }: { kind: ServiceId; className?: string }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden>
      <rect width="400" height="300" fill={BG[kind]} />
      {kind === "estrategia" && (
        <>
          {[130, 100, 70, 40].map((r, i) => (
            <circle key={r} cx="270" cy="150" r={r} fill={i % 2 ? C.wine : C.cherry} stroke={C.sage} strokeOpacity=".35" strokeWidth="2" />
          ))}
          <circle cx="270" cy="150" r="14" fill={C.butter} />
          <path d="M40 260 L250 160" stroke={C.butter} strokeWidth="8" strokeLinecap="round" />
          <path d="M236 150 L262 156 L248 178Z" fill={C.butter} />
          <rect x="40" y="40" width="70" height="10" rx="5" fill={C.sage} />
          <rect x="40" y="60" width="44" height="10" rx="5" fill={C.sage} opacity=".6" />
        </>
      )}
      {kind === "branding" && (
        <>
          <path d="M40 260 V150 a70 70 0 0 1 140 0 V260Z" fill={C.cherry} />
          <rect x="210" y="60" width="150" height="150" rx="16" fill={C.porcelain} />
          <text x="285" y="168" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="110" fill={C.cherry}>Aa</text>
          {[C.cherry, C.sage, C.cream].map((c, i) => (
            <rect key={i} x={210 + i * 54} y="226" width="42" height="42" rx="21" fill={c} stroke={C.cherry} strokeWidth="2" />
          ))}
        </>
      )}
      {kind === "redes" && (
        <>
          <rect x="130" y="24" width="140" height="270" rx="26" fill={C.cherry} />
          <rect x="142" y="48" width="116" height="232" rx="12" fill={C.porcelain} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={150 + (i % 2) * 54} y={58 + Math.floor(i / 2) * 72} width="46" height="62" rx="6" fill={i % 3 === 0 ? C.butter : i % 3 === 1 ? C.sage : C.cherry} />
          ))}
          <path d="M290 70 h80 a14 14 0 0 1 14 14 v34 a14 14 0 0 1 -14 14 h-56 l-18 16 v-16 h-6 a14 14 0 0 1 -14 -14 v-34 a14 14 0 0 1 14 -14Z" fill={C.butter} />
          <path d="M20 190 h76 a14 14 0 0 1 14 14 v28 a14 14 0 0 1 -14 14 h-6 v16 l-18 -16 h-52 a14 14 0 0 1 -14 -14 v-28 a14 14 0 0 1 14 -14Z" fill={C.porcelain} />
        </>
      )}
      {kind === "ads" && (
        <>
          {[60, 100, 80, 150, 190].map((h, i) => (
            <rect key={i} x={40 + i * 46} y={270 - h} width="32" height={h} rx="8" fill={i === 4 ? C.cherry : C.sage} />
          ))}
          <path d="M40 210 L132 170 L178 190 L270 90" fill="none" stroke={C.cherry} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M300 60 L360 36 V144 L300 120Z" fill={C.cherry} />
          <rect x="280" y="72" width="26" height="36" rx="6" fill={C.wine} />
          {[0, 1, 2].map((i) => (
            <path key={i} d={`M372 ${60 + i * 24} l18 ${-8 + i * 8}`} stroke={C.cherry} strokeWidth="5" strokeLinecap="round" />
          ))}
        </>
      )}
      {kind === "web" && (
        <>
          <rect x="40" y="40" width="320" height="230" rx="16" fill={C.porcelain} stroke={C.cherry} strokeWidth="4" />
          <rect x="40" y="40" width="320" height="34" rx="16" fill={C.cherry} />
          {[0, 1, 2].map((i) => <circle key={i} cx={62 + i * 18} cy="57" r="5" fill={C.butter} />)}
          <rect x="64" y="96" width="160" height="22" rx="6" fill={C.cherry} />
          <rect x="64" y="128" width="110" height="12" rx="6" fill={C.sage} />
          <rect x="64" y="160" width="84" height="30" rx="15" fill={C.cherry} />
          <rect x="244" y="96" width="94" height="150" rx="10" fill={C.sage} />
          <rect x="64" y="210" width="160" height="36" rx="8" fill={C.cream} />
        </>
      )}
      {kind === "audiovisual" && (
        <>
          <rect x="0" y="236" width="400" height="44" fill={C.cherry} />
          {[...Array(10)].map((_, i) => <rect key={i} x={10 + i * 40} y="248" width="22" height="20" rx="3" fill={C.sage} />)}
          <rect x="70" y="70" width="210" height="140" rx="18" fill={C.cherry} />
          <circle cx="175" cy="140" r="52" fill={C.wine} />
          <circle cx="175" cy="140" r="30" fill={C.butter} />
          <path d="M280 110 L340 80 V200 L280 170Z" fill={C.wine} />
          <rect x="90" y="52" width="60" height="22" rx="6" fill={C.wine} />
        </>
      )}
    </svg>
  );
}
