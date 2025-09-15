import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/ui/Logo';
const Auth = () => {
  return <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 glass-card rounded-2xl p-8">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">InsightsLM</h1>
          <p className="text-white/80 drop-shadow">Your AI-powered knowledge companion</p>
        </div>
        <AuthForm />
      </div>
    </div>;
};
export default Auth;