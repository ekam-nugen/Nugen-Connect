import SidebarComponent from "@/components/sidebarComponent";
import TopbarComponent from "@/components/topbarComponent";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-20 bg-white">
        <TopbarComponent />
      </div>
      <div className="flex absolute top-[12%]">
        <div className="h-screen">
          <SidebarComponent icon={""} label={""} />
        </div>
        <div className="flex-grow h-screen ml-4 w-screen bg-gray-200 rounded-md">
          hello
        </div>
      </div>
    </>
  );
}
