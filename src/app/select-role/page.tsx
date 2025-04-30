'use client';
import { useRouter } from 'next/navigation';

export default function SelectRole() {
  const router = useRouter();

  return (
    <div>
      <h1>Are you a Brand or an Influencer?</h1>
      <button onClick={() => router.push('/onboarding/brand')}>Brand</button>
      <button onClick={() => router.push('/onboarding/influencer')}>Influencer</button>
    </div>
  );
}
