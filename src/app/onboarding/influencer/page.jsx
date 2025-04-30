'use client';

import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function InfluencerOnboarding() {
  const [name, setName] = useState('');
  const [niche, setNiche] = useState('');
  const [instagram, setInstagram] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const { data: userData } = await supabase.auth.getUser();
    const userId = userData?.user?.id;

    if (!userId) return alert('Not logged in');

    await supabase.from('influencers').insert({
      id: userId,
      name,
      niche,
      social_links: { instagram },
    });

    await supabase.auth.updateUser({ data: { user_type: 'influencer' } });
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Influencer Onboarding</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
      <input value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="Niche" />
      <input value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="Instagram Link" />
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}
