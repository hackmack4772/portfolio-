import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, AlertTriangle, KeyRound } from 'lucide-react';
import HelmetWrapper from '../components/HelmetWrapper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (error) {
      setError('Invalid admin credentials. Access Denied.');
      console.error('Login error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-bg-base text-text-base flex items-center justify-center p-6 relative overflow-hidden">
      <HelmetWrapper>
        <title>Admin Login | Portfolio Manager</title>
      </HelmetWrapper>

      {/* Background soft glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      <div className="w-full max-w-md glass-panel p-6 md:p-8 rounded-3xl border border-border-base/50 shadow-2xl relative overflow-hidden flex flex-col gap-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shadow-lg border border-primary/20">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-wider text-text-base mt-2">ADMIN PORTAL</h1>
          <p className="text-xs text-text-muted">Enter credentials to modify portfolio records</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 text-xs">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Email input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Admin Email</label>
            <div className="relative rounded-xl border border-border-base/40 focus-within:border-accent transition-colors">
              <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hackmack.com"
                required
                className="w-full pl-10 pr-4 py-3 bg-bg-sub/30 rounded-xl text-xs md:text-sm text-text-base placeholder-text-muted/30 focus:outline-none"
              />
            </div>
          </div>

          {/* Password input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Security Key</label>
            <div className="relative rounded-xl border border-border-base/40 focus-within:border-accent transition-colors">
              <Lock className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-3 bg-bg-sub/30 rounded-xl text-xs md:text-sm text-text-base placeholder-text-muted/30 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_15px_rgba(12,251,255,0.25)] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none"
          >
            <KeyRound className="w-4 h-4" />
            <span>{loading ? "Decrypting..." : "Access Dashboard"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;