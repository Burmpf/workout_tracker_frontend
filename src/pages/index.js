import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { user, error, isLoading } = useUser();
  // if the user is loading, display a loading message
  if (isLoading) return <div>Loading...</div>;
  // if there's an error, display it
  if (error) return <div>{error.message}</div>;
  // if the user is logged in, display their name, email, and picture
  if (user) {
    return (
      <div className=" h-screen bg-black text-purple-500 flex items-center justify-center">
        <Image
          className="rounded-full w-20 h-20"
          src={user.picture}
          width={100}
          height={100}
          alt={user.name}
        />
        <div className="flex flex-col">
          <h2 className=" mb-2 text-2xl">
            Welcome {user.name}!
          </h2>
          <div className="flex flex-col items-center mb-2 text-sm">
            <Link
              className=" text-center w-1/2 mb-2 rounded-md text-sm outline outline-offset-0 outline-purple-500"
              href="/calendar"
            >
              Calendar
            </Link>
            <Link
              className=" text-center w-1/2 mb-2 rounded-md text-sm outline outline-offset-0 outline-purple-500"
              href="/DailyDiary"
            >
              Daily Diary
            </Link>
            <a
              className=" text-center w-1/2 mb-2 rounded-md text-sm outline outline-offset-0 outline-purple-500"
              href="/api/auth/logout"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
  // if the user is not logged in, display a login button
  return <a href="/api/auth/login">Login</a>;
}
