import Counter from './components/Counter';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function Home() {
  const session = useSession();

  if (session.status === 'unauthenticated') {
    return (
      <>
        <button onClick={() => signIn('github')}>Sign In</button>
      </>
    );
  }

  if (session.status === 'loading') {
    return <h2>Please Wait....</h2>;
  }

  return (
    <div>
      <h2>COUNTER MAIN....</h2>
      <button onClick={() => signOut()}>Sign out</button>
      <p>{session.data.user.email}</p>
      <p>{session.data.user.name}</p>
      <Counter />
    </div>
  );
}
