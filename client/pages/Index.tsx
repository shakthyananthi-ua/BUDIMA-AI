import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import {
  Sparkles,
  Zap,
  BarChart3,
  ShoppingCart,
  Gift,
  MessageSquare,
  Check,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { useState } from 'react';

export default function Index() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    business: '',
    phone: '',
  });

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({
      name: '',
      email: '',
      message: '',
      business: '',
      phone: '',
    });
  };

  const features = [
    {
      icon: Sparkles,
      title: 'AI Caption Creation',
      description: 'Generate engaging social media captions and trending hashtags instantly',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Promotion Poster Generator',
      description: 'Create trendy, professional promotional posters suitable for social media',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'AI Post Scheduling',
      description: 'Automate Instagram posting with AI-optimized timing and content',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageSquare,
      title: 'Analytics Dashboard',
      description: 'Real-time insights on reviews, engagement, and customer sentiment',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: ShoppingCart,
      title: 'Direct Marketplace',
      description: 'Connect directly with customers, build trust with verified sellers',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Gift,
      title: 'Offer Generator',
      description: 'Create festival and seasonal promotions with AI-generated templates',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '₹149',
      color: 'green',
      features: [
        'AI captions & hashtags',
        'Basic poster generation',
        'Limited scheduling',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: '₹449',
      color: 'blue',
      popular: true,
      features: [
        'All Starter features',
        'Full scheduling',
        'Analytics dashboard',
        'Offer templates',
        'Priority support',
      ],
    },
    {
      name: 'Pro',
      price: '₹899',
      color: 'purple',
      features: [
        'All Growth features',
        'Marketplace access',
        'Advanced analytics',
        'Priority AI generation',
        'Dedicated support',
      ],
    },
  ];

  const problems = [
    { icon: '📱', text: 'Marketing scattered across platforms' },
    { icon: '💰', text: 'Expensive marketing agencies' },
    { icon: '🎯', text: 'Hard for local brands to get discovered' },
    { icon: '🔍', text: 'Difficulty finding the right market' },
    { icon: '✅', text: 'Product authenticity concerns' },
    { icon: '🔒', text: 'Data privacy & security risks' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-budima-light-bg via-white to-blue-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-budima-deep-blue leading-tight">
                  All-in-One AI Digital Marketing Assistant
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                  One Dashboard. Smart Marketing with AI.
                </p>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Empower your business with AI-driven marketing automation, real-time analytics,
                and direct customer engagement. From small shops to growing brands, scale your
                presence effortlessly.
              </p>

              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-budima-deep-blue to-budima-indigo text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-budima-deep-blue/30 transition-all duration-300 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Illustration */}
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-br from-budima-light-blue/20 to-budima-purple/20 rounded-3xl p-8 border border-budima-light-blue/30 backdrop-blur-sm">
                <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-full">
                      <div className="h-3 bg-budima-deep-blue/10 rounded-full w-3/4"></div>
                    </div>
                    <div className="w-8 h-8 bg-budima-light-blue rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-2 bg-budima-deep-blue/10 rounded-full"></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-12 bg-gradient-to-br from-budima-light-blue/10 to-budima-purple/10 rounded-lg"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-budima-light-blue/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-budima-purple/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Marquee */}
      <section className="bg-budima-dark-bg text-white py-8 overflow-hidden">
        <div className="marquee-container overflow-hidden">
          <div className="marquee-content flex gap-8 animate-scroll whitespace-nowrap">
            {[
              '🔥 Diwali Mega Sale — Up to 50% Off!',
              '🚀 Boost Your Brand with AI Marketing!',
              '📈 From Local Shop to Online Success!',
              '⭐ Join 1000+ Successful Businesses',
            ].map((ad, i) => (
              <div key={i} className="inline-flex items-center gap-4 text-xl font-semibold">
                <span>{ad}</span>
                <span className="text-budima-light-blue">•</span>
              </div>
            ))}
            {[
              '🔥 Diwali Mega Sale — Up to 50% Off!',
              '🚀 Boost Your Brand with AI Marketing!',
              '📈 From Local Shop to Online Success!',
              '⭐ Join 1000+ Successful Businesses',
            ].map((ad, i) => (
              <div key={`repeat-${i}`} className="inline-flex items-center gap-4 text-xl font-semibold">
                <span>{ad}</span>
                <span className="text-budima-light-blue">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-budima-deep-blue mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to scale your digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-budima-light-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                      <Icon className={`w-7 h-7 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-budima-deep-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 bg-budima-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-budima-deep-blue mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'lg:scale-105 bg-white border-2 border-budima-light-blue shadow-2xl'
                    : 'bg-white border border-gray-200 hover:border-budima-light-blue hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-budima-deep-blue to-budima-indigo text-white text-sm font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-8 border-b ${plan.popular ? 'border-budima-light-blue/30' : 'border-gray-200'}`}>
                  <h3 className="text-2xl font-bold text-budima-deep-blue mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-budima-deep-blue">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-budima-light-blue flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 border-t border-gray-200">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-budima-deep-blue to-budima-indigo text-white hover:shadow-lg'
                        : 'bg-gray-100 text-budima-deep-blue hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-budima-deep-blue mb-4">
                  Why BUDIMA AI?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand the challenges faced by small businesses and local brands in
                  today's digital landscape. Our AI-powered solution removes barriers and
                  empowers you to succeed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problems.map((problem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{problem.icon}</span>
                    <p className="text-gray-700 font-medium">{problem.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-budima-indigo">Our Solutions</h3>

              <div className="space-y-4">
                {[
                  'All-in-one AI marketing platform',
                  'Market targeting using AI insights',
                  'Verified sellers & real reviews',
                  'Low-cost automation',
                  'Secure encrypted system',
                  'Integrated dashboard',
                  'Direct buyer–seller interaction',
                ].map((solution, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-budima-light-bg rounded-xl hover:bg-blue-100 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-r from-budima-light-blue to-budima-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 bg-budima-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-budima-deep-blue mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? We'd love to hear from you. Send us a message!
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-budima-deep-blue mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-budima-light-blue focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-budima-deep-blue mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-budima-light-blue focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-budima-deep-blue mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={contactForm.business}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-budima-light-blue focus:border-transparent transition-all"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-budima-deep-blue mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-budima-light-blue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-budima-deep-blue to-budima-indigo text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-budima-deep-blue mb-6">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-budima-light-blue hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-budima-light-blue to-budima-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-budima-deep-blue mb-1">Email</h4>
                    <p className="text-gray-600">hello@budimaai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-budima-light-blue hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-budima-light-blue to-budima-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-budima-deep-blue mb-1">Phone</h4>
                    <p className="text-gray-600">+91 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-budima-light-blue hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-budima-light-blue to-budima-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-budima-deep-blue mb-1">Location</h4>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-budima-deep-blue/10 to-budima-indigo/10 rounded-xl border border-budima-light-blue/30">
                <p className="text-gray-700 leading-relaxed">
                  Our team is passionate about helping businesses succeed with AI-powered
                  marketing solutions. We're here to support you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-budima-dark-bg text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-budima-light-blue to-budima-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="font-bold text-lg">BUDIMA AI</span>
              </div>
              <p className="text-gray-400">All-in-One AI Digital Marketing Assistant</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-budima-light-blue transition">Features</a></li>
                <li><a href="#" className="hover:text-budima-light-blue transition">Pricing</a></li>
                <li><a href="#" className="hover:text-budima-light-blue transition">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-budima-light-blue transition">About</a></li>
                <li><a href="#" className="hover:text-budima-light-blue transition">Blog</a></li>
                <li><a href="#" className="hover:text-budima-light-blue transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-budima-light-blue transition">Privacy</a></li>
                <li><a href="#" className="hover:text-budima-light-blue transition">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">
              © 2024 BUDIMA AI. All rights reserved. Made with ❤️ for Indian businesses.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
