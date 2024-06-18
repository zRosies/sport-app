"use client";
import { signOut, useSession } from "next-auth/react";
import { ServerComponent } from "../api/auth/[...nextauth]/options";
import Router from "next/router";
import { redirect } from "next/navigation";

const Profile = () => {
  return (
    <>
      <p>Welcome, ...</p>
      <button onClick={() => signOut()}>Log out</button>
    </>
  );
};

export default Profile;
