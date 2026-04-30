import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d2f25",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "2px solid rgba(255,255,255,0.28)",
            borderRadius: "12px",
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            height: 88,
            justifyContent: "center",
            marginBottom: 42,
            padding: "0 28px",
          }}
        >
          Limitless
        </div>
        <div style={{ color: "#d9f0e4", fontSize: 32, fontWeight: 600 }}>
          Michigan State University
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.04, marginTop: 18 }}>
          Limitless Consulting
        </div>
        <div style={{ color: "rgba(255,255,255,0.78)", fontSize: 34, lineHeight: 1.35, marginTop: 28, maxWidth: 880 }}>
          Student-led consulting for student startups and entrepreneurs.
        </div>
      </div>
    ),
    { ...size },
  );
}
