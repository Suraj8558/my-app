import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Old flat URLs → canonical hook pages (permanent 308) ──
      {
        source: "/react-hooks/useState",
        destination: "/hooks/use-state",
        statusCode: 301,
      },
      {
        source: "/react-hooks/useEffect",
        destination: "/hooks/use-effect",
        statusCode: 301,
      },
      {
        source: "/react-hooks/useContext",
        destination: "/hooks/use-context",
        statusCode: 301,
      },
      {
        source: "/react-hooks/useReducer",
        destination: "/hooks/use-reducer",
        statusCode: 301,
      },
      {
        source: "/react-hooks/useRef",
        destination: "/hooks/use-ref",
        statusCode: 301,
      },
      {
        source: "/react-hooks/useMemo",
        destination: "/hooks/use-memo",
        statusCode: 301,
      },
      {
        source: "/react-hooks/useCallback",
        destination: "/hooks/use-callback",
        statusCode: 301,
      },

      // ── Old "/learn/" prefix URLs → canonical (permanent 308) ──
      {
        source: "/learn/use-state",
        destination: "/hooks/use-state",
        statusCode: 301,
      },
      {
        source: "/learn/use-effect",
        destination: "/hooks/use-effect",
        statusCode: 301,
      },
      {
        source: "/learn/use-ref",
        destination: "/hooks/use-ref",
        statusCode: 301,
      },

      // ── Old "/tutorial/" prefix URLs → canonical (permanent 301) ──
      {
        source: "/tutorial/hooks/state",
        destination: "/hooks/use-state",
        statusCode: 301,
      },
      {
        source: "/tutorial/hooks/effect",
        destination: "/hooks/use-effect",
        statusCode: 301,
      },
      {
        source: "/tutorial/hooks/context",
        destination: "/hooks/use-context",
        statusCode: 301,
      },

      // ── Wildcard: /react-hooks/:slug → /hooks/:slug (permanent 308) ──
      {
        source: "/react-hooks/:slug",
        destination: "/hooks/:slug",
        statusCode: 301,
      },

      // ── Misc legacy paths ──
      {
        source: "/docs/hooks",
        destination: "/hooks",
        statusCode: 301,
      },
      {
        source: "/api-reference/hooks",
        destination: "/hooks",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
