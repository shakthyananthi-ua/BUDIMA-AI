import { useState } from 'react';
import { BarChart3, TrendingUp, MessageCircle, Play } from 'lucide-react';

export default function AnalyticsDashboard() {
  const [companyName, setCompanyName] = useState('');
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!companyName.trim()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnalytics({
        overallRating: 4.6,
        sentimentScore: 82,
        googleReviews: {
          rating: 4.7,
          count: 324,
          trend: '+12%',
        },
        instagramEngagement: {
          followers: 12500,
          avgLikes: 450,
          trend: '+8%',
        },
        youtubePresence: {
          subscribers: 3200,
          avgViews: 1200,
          trend: '+15%',
        },
        sentiment: {
          positive: 78,
          neutral: 15,
          negative: 7,
        },
        insights: [
          'Strong customer sentiment about product quality',
          'Engagement rate is 15% above industry average',
          'Instagram stories are your most engaging content',
          'Consider increasing video content frequency',
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Brand Analytics
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter your business name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!companyName.trim() || loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Analyzing...' : 'Analyze Brand'}
          </button>
        </div>
      </div>

      {/* Analytics Results */}
      {analytics && (
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-8 text-white">
            <p className="text-sm opacity-90 mb-2">Overall Brand Rating</p>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold">{analytics.overallRating}</div>
              <div className="flex-1">
                <div className="text-sm opacity-90 mb-1">Customer Sentiment</div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-white rounded-full h-3 transition-all"
                    style={{ width: `${analytics.sentimentScore}%` }}
                  ></div>
                </div>
                <p className="text-sm opacity-90 mt-1">{analytics.sentimentScore}% Positive</p>
              </div>
            </div>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Google Reviews */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">Google Reviews</h4>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-800">{analytics.googleReviews.rating}</div>
                <p className="text-sm text-gray-600">{analytics.googleReviews.count} reviews</p>
                <p className="text-sm font-semibold text-green-600">{analytics.googleReviews.trend}</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">Instagram</h4>
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-pink-600" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-800">{analytics.instagramEngagement.followers.toLocaleString()}</div>
                <p className="text-sm text-gray-600">followers</p>
                <p className="text-sm font-semibold text-green-600">{analytics.instagramEngagement.trend}</p>
              </div>
            </div>

            {/* YouTube */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">YouTube</h4>
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-red-600 fill-current" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-800">{analytics.youtubePresence.subscribers.toLocaleString()}</div>
                <p className="text-sm text-gray-600">subscribers</p>
                <p className="text-sm font-semibold text-green-600">{analytics.youtubePresence.trend}</p>
              </div>
            </div>
          </div>

          {/* Sentiment Breakdown */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Sentiment Analysis</h4>
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Positive</span>
                  <span className="text-sm font-bold text-green-600">{analytics.sentiment.positive}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 rounded-full h-3 transition-all"
                    style={{ width: `${analytics.sentiment.positive}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Neutral</span>
                  <span className="text-sm font-bold text-gray-600">{analytics.sentiment.neutral}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gray-500 rounded-full h-3 transition-all"
                    style={{ width: `${analytics.sentiment.neutral}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Negative</span>
                  <span className="text-sm font-bold text-red-600">{analytics.sentiment.negative}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 rounded-full h-3 transition-all"
                    style={{ width: `${analytics.sentiment.negative}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
            <h4 className="font-semibold text-gray-800 mb-4">AI Insights & Recommendations</h4>
            <ul className="space-y-2">
              {analytics.insights.map((insight: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {!analytics && !loading && (
        <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <BarChart3 className="w-12 h-12 text-purple-300 mx-auto mb-4" />
          <p className="text-gray-600">Enter your company name to see detailed analytics</p>
        </div>
      )}
    </div>
  );
}
