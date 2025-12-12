'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseclient';
import { useRouter } from 'next/navigation';
import type { AuthError } from '@supabase/supabase-js';


export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      }

      router.push('/'); // go to homepage after auth
    } catch (err: unknown) {
      const supabaseError = err as AuthError;
      setError(supabaseError?.message ?? 'Unexpected authentication error.');
    }
  }

  return (
    <main className="container py-5" style={{ maxWidth: 420 }}>
      <h2 className="text-center mb-4">{isLogin ? 'Log In' : 'Sign Up'}</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      <p className="text-center mt-3">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          type="button"
          className="btn btn-link p-0"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </main>
  );
}
