import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Wand2, Calendar, BarChart3, ShoppingCart, Gift } from 'lucide-react';
import AICaptionCreation from '@/components/features/AICaptionCreation';
import PromotionPosterGenerator from '@/components/features/PromotionPosterGenerator';
import AIPostScheduling from '@/components/features/AIPostScheduling';
import AnalyticsDashboard from '@/components/features/AnalyticsDashboard';
import DirectMarketplace from '@/components/features/DirectMarketplace';
import OfferGenerator from '@/components/features/OfferGenerator';

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState('captions');

  const features = [
    {
      id: 'captions',
      name: 'AI Caption Creation',
      icon: Sparkles,
      description: 'Generate engaging captions & trending hashtags',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'posters',
      name: 'Promotion Poster Generator',
      icon: Wand2,
      description: 'Create trendy product posters',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'scheduling',
      name: 'AI Post Scheduling',
      icon: Calendar,
      description: 'Automate Instagram posting',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      icon: BarChart3,
      description: 'Track brand performance & insights',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'marketplace',
      name: 'Direct Marketplace',
      icon: ShoppingCart,
      description: 'Connect with customers directly',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 'offers',
      name: 'Offer Generator',
      icon: Gift,
      description: 'Create festival promotions',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const activeFeatureData = features.find((f) => f.id === activeFeature)!;
  const ActiveIcon = activeFeatureData.icon;

  const getFeatureComponent = () => {
    switch (activeFeature) {
      case 'captions':
        return <AICaptionCreation />;
      case 'posters':
        return <PromotionPosterGenerator />;
      case 'scheduling':
        return <AIPostScheduling />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'marketplace':
        return <DirectMarketplace />;
      case 'offers':
        return <OfferGenerator />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 bg-gradient-to-br ${activeFeatureData.color} rounded-xl flex items-center justify-center`}>
              <ActiveIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-purple-600">{activeFeatureData.name}</h1>
              <p className="text-gray-600">{activeFeatureData.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Feature Selector Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-20 h-fit">
              <h3 className="font-bold text-gray-800 mb-4">All Features</h3>
              <div className="space-y-2">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeFeature === feature.id
                          ? 'bg-purple-100 border border-purple-300'
                          : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${activeFeature === feature.id ? 'text-purple-600' : 'text-gray-600'}`} />
                        <div className="text-left">
                          <p className={`text-sm font-semibold ${activeFeature === feature.id ? 'text-purple-600' : 'text-gray-700'}`}>
                            {feature.name.split(' ')[0]}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">{feature.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Feature Content */}
          <div className="lg:col-span-3">{getFeatureComponent()}</div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">All Features at a Glance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`p-6 rounded-xl border-2 transition-all hover:-translate-y-2 ${
                    activeFeature === feature.id
                      ? 'bg-purple-50 border-purple-300 shadow-lg'
                      : 'bg-white border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                      <Icon className={`w-6 h-6 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-purple-600 mb-2 text-left">{feature.name}</h3>
                  <p className="text-sm text-gray-600 text-left mb-4">{feature.description}</p>

                  <div className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition">
                    Try Now →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
