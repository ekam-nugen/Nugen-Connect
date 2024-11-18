import SidebarComponent from "@/components/sidebarComponent";
import TopbarComponent from "@/components/topbarComponent";

export default function Home() {
  return (
    <>
      <div className="w-max shadow-md 1200:w-screen">
        <TopbarComponent />
      </div>


      {/* w-screen border-2 border-red-600 shadow-md */}
      {/* <div className="flex absolute top-[12%]">
        <div className="h-screen">
          <SidebarComponent icon={""} label={""} />
        </div>
        <div className="flex-grow h-screen ml-4 w-screen bg-gray-200 rounded-md">
          hello
        </div>
      </div> */}
    </>
  );
}
