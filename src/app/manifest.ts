import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TuTurns",
    short_name: "TuTurns",
    description:
      "TuTurns offers personalized and comprehensive tutoring services for O/A Level, GCSE, and IGCSE boards. Unlock your academic potential with our experienced tutors.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3498db", // Customize the theme color based on your brand
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    related_applications: [],
    shortcuts: [],
    categories: ["education", "tutoring"],
    lang: "en-US",
  };
}
