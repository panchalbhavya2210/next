export const metadata = {
  title: "Contact | My Website",
  description: "Get in touch with us.",
  openGraph: {
    title: "Contact | My Website",
    description: "Get in touch with us.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact page preview image",
      },
    ],
  },
};

export default function Contact() {
  return <h1>Welcome to the Contact Page</h1>;
}
