import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";

export default function BentoGrid({
  courses,
}: any) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-6 flex-1">

      <div className="lg:col-span-3">
        <HeroTile />
      </div>

      <ActivityTile />

      {courses.map((course: any) => (
        <CourseCard
          key={course.id}
          {...course}
        />
      ))}
    </main>
  );
}