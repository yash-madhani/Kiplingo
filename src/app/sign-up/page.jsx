'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ App Router version
import { supabase } from '@/lib/supabaseClient'; // adjust path as needed

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // ✅ Works now

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push('/select-role'); // ✅ Navigates correctly
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
