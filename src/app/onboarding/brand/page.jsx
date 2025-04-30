'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function BrandOnboarding() {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    const userId = sessionData?.session?.user?.id;
  
    if (!userId) {
      alert('Not logged in');
      return;
    }
  
    const { error: insertError } = await supabase.from('brands').insert({
      id: userId,
      name,
      website,
    });
  
    if (insertError) {
      alert('Error inserting brand data: ' + insertError.message);
      return;
    }
  
    await supabase.auth.updateUser({ data: { user_type: 'brand' } });
    router.push('/dashboard');
  };
  

  return (
    <div>
      <h1>Brand Onboarding</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Brand Name" />
      <input value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" />
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}
