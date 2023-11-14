"use client";

import {signOut} from "next-auth/react";

function DashboardPage() {
  return (
    <section className="flex flex-col justify-center items-center h-[calc(100vh-7rem)]">
      <h1 className="text-5xl">Dashboard</h1>
      <button
        className="bg-black text-white rounded-md p-3"
        type="button"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </section>
  );
}

export default DashboardPage;
