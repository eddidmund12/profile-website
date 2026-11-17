import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name}: backend developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e1014",
          color: "#eef0f4",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              border: "2px solid #353c49",
              background: "#14171d",
              color: "#66adff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {site.monogram}
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Building the systems behind great products.
          </div>
          <div style={{ fontSize: 32, color: "#a3a9b5" }}>
            Backend engineering, API development, and practical technology products.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
