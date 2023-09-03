import { Separator } from "@/components/ui/separator";
import "./globals.css";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Liveblocks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="https://liveblocks.io/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="https://liveblocks.io/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
        </head>
        <body>
          <div className="hidden space-y-3 py-2 mx-10 md:block">
            <div className="space-y-0.5">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                Home
              </Link>
            </div>
            <Separator className="my-6" />
            <div className="flex-1 container lg:max-w-4xl flex flex-col">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
