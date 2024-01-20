import type { Metadata } from "next";
import RootLayout from "../layout";

export const metadata: Metadata = {
  title: "Log in or Sign up - Financial Tracker",
  description:
    "Create or log in with your existing account to keep track of your money NOW!",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayout>{children}</RootLayout>;
}
