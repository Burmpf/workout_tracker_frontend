import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useUser } from "@auth0/nextjs-auth0";



export default function Home() {

    const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Image src={user.picture} alt={user.name} />
        <Link href="/calendar">
        Calendar
      </Link>
      <Link href="/DailyDiary">
        Daily Diary
      </Link>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  return <a href="/api/auth/login">Login</a>;
};
