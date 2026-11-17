import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e1014",
          color: "#66adff",
          fontSize: 30,
          fontWeight: 700,
          borderRadius: 14,
          border: "2px solid #353c49",
        }}
      >
        EA
      </div>
    ),
    size,
  );
}
