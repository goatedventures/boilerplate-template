import { ImageResponse } from "next/og";
import { siteConfig, ogColors as colors } from "@/config/site";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInterFont(weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((res) => res.text());

  const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error(`Could not load Inter weight ${weight}`);
  return fetch(url).then((res) => res.arrayBuffer());
}

function Star({ filled }: { filled: boolean }) {
  return (
    <div
      style={{
        width: 26,
        height: 26,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={filled ? colors.star : colors.starMuted}
        />
      </svg>
    </div>
  );
}

export default async function OGImage() {
  const { business, hero } = siteConfig;

  const [interRegular, interBold] = await Promise.all([
    loadInterFont(400),
    loadInterFont(700),
  ]);

  const filledStars = Math.floor(hero.rating.score);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "Inter, sans-serif",
          background: `linear-gradient(145deg, ${colors.dark} 0%, #292019 60%, #3D2A18 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: 250,
            background: `radial-gradient(circle, ${colors.primary}25 0%, transparent 70%)`,
          }}
        />
        {/* Decorative glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: 175,
            background: `radial-gradient(circle, ${colors.primaryLight}15 0%, transparent 70%)`,
          }}
        />

        {/* Left accent stripe */}
        <div
          style={{
            width: 8,
            height: "100%",
            background: `linear-gradient(to bottom, ${colors.star}, ${colors.primary}, ${colors.primaryLight})`,
            flexShrink: 0,
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 56px 44px 48px",
          }}
        >
          {/* Top row: Business name + Google rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 12L12 6L18 12L12 18Z" fill="white" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 30,
                  fontWeight: 700,
                  color: colors.white,
                  letterSpacing: "-0.02em",
                }}
              >
                {business.name}
              </div>
            </div>

            {/* Google rating pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: colors.darkCard,
                padding: "12px 24px",
                borderRadius: 50,
                border: `1px solid ${colors.whiteSubtle}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 17,
                  fontWeight: 700,
                  color: colors.whiteAlpha,
                }}
              >
                {hero.rating.platform}
              </div>
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < filledStars} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.star,
                }}
              >
                {String(hero.rating.score)}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 16,
                  color: colors.whiteAlpha,
                  marginLeft: 2,
                }}
              >
                {`(${hero.rating.count.toLocaleString()}+)`}
              </div>
            </div>
          </div>

          {/* Center: Headline + subheadline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                fontSize: 58,
                fontWeight: 700,
                color: colors.white,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                maxWidth: 900,
                textWrap: "balance",
              }}
            >
              {hero.headline}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 26,
                color: colors.whiteAlpha,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                textWrap: "balance",
              }}
            >
              {hero.subheadline}
            </div>
          </div>

          {/* Bottom: Phone CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
              color: colors.white,
              padding: "20px 0",
              borderRadius: 16,
              fontSize: 28,
              fontWeight: 700,
              boxShadow: `0 4px 24px ${colors.primary}50`,
              letterSpacing: "0.02em",
            }}
          >
            {`Call Now: ${business.phone}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    },
  );
}
