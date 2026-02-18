import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Mail, Lock, Chrome } from 'lucide-react';
import BudimaLogo from '@/components/BudimaLogo';

export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to dashboard (placeholder)
      navigate('/dashboard');
    }, 1000);
  };

  const handleGoogleLogin = () => {
    // Handle Google OAuth
    console.log('Google login clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2 mb-8 group">
          <BudimaLogo size="large" />
          <div className="hidden sm:block">
            <div className="font-bold text-2xl">
              <span className="text-purple-600">Bu</span>
              <span className="text-purple-600">Di</span>
              <span className="text-purple-600">Ma</span>
              <span className="text-blue-400 ml-1">AI</span>
            </div>
          </div>
        </Link>

        {/* Card Container */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 sm:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-purple-600 mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-600">
              {isSignUp
                ? 'Start automating your digital marketing today'
                : 'Login to access your marketing dashboard'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business Name (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-purple-600 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your business name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required={isSignUp}
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-purple-600 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Confirm Password (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-purple-600 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            {/* Remember Me / Forgot Password */}
            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-purple-500 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-700 transition">
                  Forgot password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Chrome className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Toggle Sign Up / Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setFormData({
                    email: '',
                    password: '',
                    confirmPassword: '',
                    businessName: '',
                  });
                }}
                className="text-purple-600 font-semibold hover:text-purple-700 transition"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-purple-600 transition inline-flex items-center gap-1"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-gray-600">
            🔒 Bank-level security encryption
          </p>
          <p className="text-xs text-gray-500">
            Your data is protected with industry-leading security standards
          </p>
        </div>
      </div>
    </div>
  );
}
