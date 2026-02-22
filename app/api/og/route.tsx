import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";
import { siteConfig, ogColors as colors } from "@/config/site";

export const runtime = "edge";

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
        width: 22,
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={filled ? colors.star : colors.starMuted}
        />
      </svg>
    </div>
  );
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title") ?? "Blog";
  const description = searchParams.get("description") ?? "";
  const author = searchParams.get("author") ?? "";
  const date = searchParams.get("date") ?? "";

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
          background: `linear-gradient(145deg, ${colors.dark} 0%, ${colors.darkCard} 60%, ${colors.darkCard} 100%)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 450,
            height: 450,
            borderRadius: 225,
            background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
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
          {/* Top: Business name + Blog + rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M6 12L12 6L18 12L12 18Z" fill="white" />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 26,
                  fontWeight: 700,
                  color: colors.white,
                  letterSpacing: "-0.02em",
                }}
              >
                {business.name}
              </div>
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.3)",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.primaryLight,
                  letterSpacing: "-0.01em",
                }}
              >
                Blog
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: colors.darkCard,
                padding: "10px 20px",
                borderRadius: 50,
                border: `1px solid ${colors.whiteSubtle}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  fontWeight: 700,
                  color: colors.whiteAlpha,
                }}
              >
                {hero.rating.platform}
              </div>
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < filledStars} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 17,
                  fontWeight: 700,
                  color: colors.star,
                }}
              >
                {String(hero.rating.score)}
              </div>
            </div>
          </div>

          {/* Center: Post title + description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 52,
                fontWeight: 700,
                color: colors.white,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                maxWidth: 950,
                textWrap: "balance",
              }}
            >
              {title}
            </div>
            {description && (
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: colors.whiteAlpha,
                  lineHeight: 1.45,
                  maxWidth: 850,
                  textWrap: "balance",
                }}
              >
                {description}
              </div>
            )}
          </div>

          {/* Bottom: Author + date + trust */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {author ? (
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 23,
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: colors.white,
                    fontSize: 22,
                    fontWeight: 700,
                  }}
                >
                  {author.charAt(0).toUpperCase()}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 18,
                      fontWeight: 700,
                      color: colors.white,
                    }}
                  >
                    {author}
                  </div>
                  {date && (
                    <div
                      style={{
                        display: "flex",
                        fontSize: 15,
                        color: colors.whiteAlpha,
                      }}
                    >
                      {date}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ display: "flex" }} />
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: colors.whiteSubtle,
                padding: "12px 22px",
                borderRadius: 50,
                border: `1px solid ${colors.whiteSubtle}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 16,
                  color: colors.whiteAlpha,
                }}
              >
                {`Rated ${hero.rating.score}/5 from ${hero.rating.count.toLocaleString()}+ reviews on ${hero.rating.platform}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    },
  );
}
