import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-budima-light-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-budima-light-blue hover:text-budima-deep-blue transition mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-budima-light-blue to-budima-purple rounded-xl">
            <Zap className="w-8 h-8 text-white" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-budima-deep-blue mb-4">
              Dashboard Coming Soon
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're building an amazing dashboard for you! This page is a placeholder while we
              develop the full dashboard experience with all your marketing automation tools.
            </p>
          </div>

          <div className="bg-budima-light-bg rounded-lg p-6 text-left space-y-3">
            <p className="font-semibold text-budima-deep-blue">Coming Soon:</p>
            <ul className="space-y-2 text-gray-700">
              <li>✨ AI Caption Generation</li>
              <li>🎨 Poster Designer</li>
              <li>📅 Smart Post Scheduling</li>
              <li>📊 Analytics Dashboard</li>
              <li>🛍️ Direct Marketplace</li>
              <li>🎁 Offer Generator</li>
            </ul>
          </div>

          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-budima-deep-blue to-budima-indigo text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </div>
  );
}
