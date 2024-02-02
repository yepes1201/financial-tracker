import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Tracker",
  description:
    "Sign in or create an account to keep track of all your financies.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: validate if its logged in or not
  return <main>{children}</main>;
}
