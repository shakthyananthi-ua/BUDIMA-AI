import { useState } from 'react';
import { Gift, Download, Eye } from 'lucide-react';

interface Offer {
  id: string;
  name: string;
  discount: string;
  color: string;
}

export default function OfferGenerator() {
  const [selectedFestival, setSelectedFestival] = useState('');
  const [productName, setProductName] = useState('');
  const [discountType, setDiscountType] = useState('flat');
  const [discountValue, setDiscountValue] = useState('');
  const [generated, setGenerated] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(false);

  const festivals = [
    { value: 'diwali', label: '🪔 Diwali' },
    { value: 'pongal', label: '🎉 Pongal' },
    { value: 'newyear', label: '🎊 New Year' },
    { value: 'christmas', label: '🎄 Christmas' },
    { value: 'holi', label: '🎨 Holi' },
    { value: 'easter', label: '🐰 Easter' },
  ];

  const offerTemplates = [
    { name: 'Flat Discount', value: 'flat', description: 'Flat 50% Off' },
    { name: 'Buy 1 Get 1', value: 'bogo', description: 'Buy 1 Get 1 Free' },
    { name: 'Limited Time', value: 'limited', description: 'Limited Time Offer' },
    { name: 'Bundle Deal', value: 'bundle', description: 'Bundle & Save' },
  ];

  const festivalColors: Record<string, string> = {
    diwali: 'from-orange-400 via-red-500 to-yellow-500',
    pongal: 'from-yellow-300 via-red-400 to-green-400',
    newyear: 'from-blue-500 via-purple-500 to-pink-500',
    christmas: 'from-red-500 via-green-500 to-yellow-500',
    holi: 'from-pink-400 via-purple-400 to-blue-400',
    easter: 'from-yellow-400 via-pink-400 to-purple-400',
  };

  const handleGenerate = async () => {
    if (!selectedFestival || !productName || !discountValue) return;

    setLoading(true);
    setTimeout(() => {
      const template = offerTemplates.find((t) => t.value === discountType);
      const colorKey = selectedFestival as keyof typeof festivalColors;
      setGenerated({
        id: String(Date.now()),
        name: `${productName} - ${festivals.find((f) => f.value === selectedFestival)?.label}`,
        discount: `${discountValue}% OFF`,
        color: festivalColors[colorKey] || 'from-purple-500 to-blue-500',
      });
      setLoading(false);
    }, 1200);
  };

  const handleDownload = (offer: Offer) => {
    const element = document.createElement('a');
    element.href = '#';
    element.download = `${offer.name.replace(/\s/g, '_')}.png`;
    element.click();
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5" />
          Festival Offer Generator
        </h3>

        <div className="space-y-4">
          {/* Festival Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Festival
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {festivals.map((festival) => (
                <button
                  key={festival.value}
                  onClick={() => setSelectedFestival(festival.value)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all ${
                    selectedFestival === festival.value
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {festival.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g., 'Diwali Special Saree'"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Offer Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Offer Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {offerTemplates.map((template) => (
                <button
                  key={template.value}
                  onClick={() => setDiscountType(template.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    discountType === template.value
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>

          {/* Discount Value */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Discount Value (%)
            </label>
            <input
              type="number"
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
              placeholder="e.g., 50"
              min="0"
              max="100"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!selectedFestival || !productName || !discountValue || loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Gift className="w-5 h-5" />
            {loading ? 'Generating Poster...' : 'Generate Offer Poster'}
          </button>
        </div>
      </div>

      {/* Generated Poster */}
      {generated && (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-gray-800">Your Festive Poster</h4>

          <div className="relative group">
            {/* Poster Preview */}
            <div
              className={`w-full aspect-square bg-gradient-to-br ${generated.color} rounded-xl flex flex-col items-center justify-center text-center p-8 text-white relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 transform rotate-45">
                  <div className="grid grid-cols-4 w-full h-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-white"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm opacity-90 mb-4 font-semibold">LIMITED TIME OFFER</p>
                <h2 className="text-5xl md:text-6xl font-bold mb-4">{generated.discount}</h2>
                <p className="text-2xl font-bold mb-6">{productName}</p>
                <div className="text-lg opacity-90">🎉 Celebrate with Big Savings! 🎉</div>
              </div>
            </div>

            {/* Hover Buttons */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition">
                <Eye className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => handleDownload(generated)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>

          {/* Social Share Tips */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-purple-600 mb-2">💡 Sharing Tips</p>
            <ul className="space-y-1 text-xs">
              <li>✓ Post this on Instagram, Facebook, and WhatsApp</li>
              <li>✓ Use relevant hashtags: #FestiveOffer #LimitedTime</li>
              <li>✓ Add countdown timer in your bio</li>
            </ul>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!generated && !loading && (
        <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <Gift className="w-12 h-12 text-purple-300 mx-auto mb-4" />
          <p className="text-gray-600">Select a festival and create festive offers for your products</p>
        </div>
      )}
    </div>
  );
}
