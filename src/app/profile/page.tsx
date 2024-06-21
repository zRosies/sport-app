import { getServerSession } from "next-auth";
import ProfileInfo from "../ui/profile/profileInfo";
import { getSession, useSession } from "next-auth/react";
import { sessionInfo } from "../api/auth/[...nextauth]/options";
import GetUserInfo from "../api/controllers/users";
import { User } from "../ui/utils/schema";
import { NextResponse } from "next/server";

export default async function Profile() {
  const session: any = await sessionInfo();
  console.log(session);
  const response: NextResponse = await GetUserInfo(session.user.userId);
  const userInfo: User = await response.json();

  // console.log(userInfo);

  // console.log("test" + JSON.stringify(session));
  return (
    <>
      <ProfileInfo user={userInfo} />
    </>
  );
}
