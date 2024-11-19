import TopbarComponent from "@/components/topbarComponent";
import "./globals.css";
import SidebarComponent from "@/components/sidebarComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="shadow-md w-max 1200:w-full sticky z-50 top-0 bg-white h-[9%]">
          <TopbarComponent />
        </div>
        <div className="z-10 flex gap-4 h-[91%] overflow-auto">
          <div className="overflow-y-auto h-full">
            <SidebarComponent label="" icon=""/>
          </div>
          <div className="w-full overflow-y-auto h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
