export const metadata = {
  title: "Home | My Website",
  description: "Welcome to the homepage!",
  openGraph: {
    title: "Home | My Website",
    description: "Welcome to the homepage!",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Homepage preview image",
      },
    ],
  },
};

export default function Home() {
  return <h1>Welcome to the Home Page</h1>;
}
