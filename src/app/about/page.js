export const metadata = {
  title: "About | My Website",
  description: "Learn more about us.",
  openGraph: {
    title: "About | My Website",
    description: "Learn more about us.",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About page preview image",
      },
    ],
  },
};

export default function About() {
  return <h1>Welcome to the About Page</h1>;
}
