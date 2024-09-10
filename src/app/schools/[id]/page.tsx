import SchoolInfo, {
  AvailableClass,
  StudentClasses,
} from "@/app/ui/schools/classInfo";
import { sessionInfo } from "@/app/api/auth/[...nextauth]/options";
import {
  getAvailableClasses,
  getStudentClasses,
} from "@/app/api/controllers/class";
import SchoolHeader from "@/app/ui/schools/classHeader";
import { SignInClass } from "@/app/ui/schools/signInClass";

export default async function UserDashboard({
  params,
}: {
  params: { id: string };
}) {
  const session: any = await sessionInfo();
  const response = await getStudentClasses(session.user.userId);
  const schoolData: StudentClasses = await response.json();

  const promise = await getAvailableClasses(params.id);
  const availableClasses: AvailableClass[] = await promise.json();
  const schoolId = params.id;
  return (
    <main className="px-2 relative">
      <SchoolHeader
        schoolId={schoolId}
        booking={schoolData.agendamentos_disponiveis}
      />
      <SchoolInfo
        school_id={schoolId}
        studentClasses={schoolData}
        availableClasses={availableClasses}
      />
    </main>
  );
}
