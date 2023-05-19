import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Image from 'next/image'; 


export default function Home() {
  const { user, error, isLoading } = useUser();
// if the user is loading, display a loading message
  if (isLoading) return <div>Loading...</div>;
// if there's an error, display it
  if (error) return <div>{error.message}</div>;
// if the user is logged in, display their name, email, and picture
  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Image src={user.picture} alt={user.name} />
        <Link href="/calendar">Calendar</Link>
        <Link href="/DailyDiary">Daily Diary</Link>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }
  // if the user is not logged in, display a login button
  return <a href="/api/auth/login">Login</a>;
}
