import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "radial-gradient(circle at 85% 10%, #fbe2e3 0%, transparent 55%), radial-gradient(circle at 10% 30%, #dbd7fb 0%, transparent 55%), #f9fafb",
        color: "#030712",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 36, color: "#6b7280", marginBottom: 16 }}>
        {siteConfig.url.replace("https://", "")}
      </div>
      <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.1 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 48, marginTop: 12 }}>{siteConfig.jobTitle}</div>
      <div
        style={{
          fontSize: 30,
          marginTop: 40,
          color: "#374151",
          maxWidth: 900,
          lineHeight: 1.4,
        }}
      >
        React · Next.js · TypeScript · AI · Three.js
      </div>
    </div>,
    size,
  );
}
