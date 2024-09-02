import SchoolInfo from "@/app/ui/schools/classInfo";
import SchoolHeader from "@/app/ui/schools/classHeader";

export default function UserDashboard({ params }: { params: { id: string } }) {
  const schoolId = params.id;
  return (
    <>
      <SchoolHeader schoolId={schoolId} />
      <SchoolInfo classId={schoolId} />
    </>
  );
}
