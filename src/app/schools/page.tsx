import { redirect } from "next/navigation";
import { sessionInfo } from "../api/auth/[...nextauth]/options";
import { getAllSchools } from "../api/controllers/school";
import SchoolsMain, { School } from "../ui/schools/schoolsMain";

export default async function Schools() {
  const response = await getAllSchools();

  const schoolData: any = await response.json();
  const session: any = await sessionInfo();

  if (session == null) {
    redirect("/");
  }
  return (
    <>
      <SchoolsMain schools={schoolData} userId={session.user.userId} />
    </>
  );
}
