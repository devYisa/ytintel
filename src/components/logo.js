export function LogoETWise() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 240" 
      width="100%" 
      height="100%"
    >
      <defs>
        {/* Filtro de Brilho Realista (Glow tipo Luz Física) */}
        <filter id="lightGlow" x="-20%" y="-20%" width="140%" height="140%">
          {/* Luz dissipada de fundo */}
          <feGaussianBlur stdDeviation="5" result="glow1" />
          {/* Brilho intenso junto ao traço */}
          <feGaussianBlur stdDeviation="1.5" result="glow2" />
          <feMerge>
            <feMergeNode in="glow1" />
            <feMergeNode in="glow2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ÍCONE COM BRILHO DE LUZ */}
      <g filter="url(#lightGlow)" transform="translate(175, 15)">
        {/* Cúpula Superior (Arco Ciano) */}
        <path 
          d="M 12.5,60 A 37.5,37.5 0 1,1 87.5,60" 
          fill="none" 
          stroke="#00E5FF" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />

        {/* Filamento Interno Loop (Amarelo) */}
        <path 
          d="M 42,63 C 42,42 58,42 58,63 C 58,50 42,50 42,63 Z" 
          fill="none" 
          stroke="#FFD54F" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Livro Aberto (Abas Amarelas) */}
        <path 
          d="M 6,65 C 20,55 46,65 50,85 C 54,65 80,55 94,65 L 86,76 C 74,68 56,74 50,92 C 44,74 26,68 14,76 Z" 
          fill="#FFD54F" 
        />

        {/* Linhas de Rosca Inferiores */}
        <path d="M 40,97 L 60,97" fill="none" stroke="#FFD54F" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 43,105 L 57,105" fill="none" stroke="#FFD54F" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 46.5,113 L 53.5,113" fill="none" stroke="#FFD54F" strokeWidth="4.5" strokeLinecap="round" />
      </g>

      {/* TEXTO PRINCIPAL COM BRILHO: eTWise */}
      <g filter="url(#lightGlow)">
        <text 
          x="250" 
          y="175" 
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="54" 
          fontWeight="800" 
          letterSpacing="-0.5"
        >
          <tspan fill="#FFFFFF">eT</tspan>
          <tspan fill="#00E5FF">W</tspan>
          <tspan fill="#00E5FF">i</tspan>
          <tspan fill="#FFD54F">se</tspan>
        </text>

        {/* SUBTEXTO: EDUCATION & TECHNOLOGY */}
        <text 
          x="250" 
          y="205" 
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontSize="12" 
          fontWeight="600" 
          fill="#94A3B8" 
          letterSpacing="4"
        >
          EDUCATION & TECHNOLOGY
        </text>
      </g>
    </svg>
  );
}