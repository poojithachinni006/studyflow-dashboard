import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";
import { getCourses } from "@/lib/getCourses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <section className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1">
        <BentoGrid courses={courses} />
      </div>
    </section>
  );
}