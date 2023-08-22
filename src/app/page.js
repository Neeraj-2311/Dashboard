"use client";
import { Auth } from './Auth';
import { useSession } from 'next-auth/react';

export default function Home() {
  
  const {data: session } = useSession();
  return (
    <>
      {Auth({session})}
    </>
  )
}
