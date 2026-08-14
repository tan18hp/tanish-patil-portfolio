import "./globals.css";
import { ActiveSectionProvider } from "@/components/ActiveSectionContext";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Tanish Patil",
  description: "Business Analyst • Product Management • Project Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ActiveSectionProvider>
            {children}
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}