import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user !== null && (
          <li>
            <Link href={`/profiles/${user?.id}`}>Profile</Link>
          </li>
        )}
        <li>
          {user != null ? (
            <button onClick={() => signOut()}>Log Out</button>
          ) : (
            <button onClick={() => signIn()}>Log In</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideNav;