import { getServerSession } from "next-auth";
import ProfileInfo from "../ui/profile/profileInfo";
import { getSession, useSession } from "next-auth/react";
import { sessionInfo } from "../api/auth/[...nextauth]/options";
import GetUserInfo from "../api/controllers/users";
import { User } from "../ui/utils/schema";
import { NextResponse } from "next/server";

export default async function Profile() {
  const session: any = await sessionInfo();
  const response: NextResponse = await GetUserInfo(session.user.userId);
  const userInfo: User = await response.json();

  return (
    <>
      <ProfileInfo user={userInfo} />
    </>
  );
}
