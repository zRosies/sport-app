import { sessionInfo } from "../api/auth/[...nextauth]/options";
import { getAllSchools } from "../api/controllers/school";
import SchoolsMain, { School } from "../ui/schools/schoolsMain";

export default async function Schools() {
  const response = await getAllSchools();

  const schoolData: any = await response.json();
  const session: any = await sessionInfo();

  return (
    <>
      <SchoolsMain schools={schoolData} userId={session.user.userId} />{" "}
      <p>aaaaaa</p>
    </>
  );
}
