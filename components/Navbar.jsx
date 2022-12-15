import React from "react";
import Link from "next/link";

export default function Navbar() {
  const user = null;
  const userName = null;

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo"> Feed </button>
          </Link>
        </li>
        {/* if user logged in */}
        {userName && (
          <>
            <li>
              <Link href="/admin">
                <button className="wrpost-btn"> Write a Post </button>
              </Link>
            </li>
            <li>
              <Link href={`/${userName}`}>
                user <img src={user?.photoUrl} />
              </Link>
            </li>
          </>
        )}{" "}
        {/* if user not logged in  */}
        {!userName && (
          <li>
            <Link href="/enter">
              <button className="login-btn"> Login </button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
