import { useState } from 'react';
import { Sparkles, Copy, RotateCcw } from 'lucide-react';

interface CaptionResult {
  caption: string;
  hashtags: string[];
}

export default function AICaptionCreation() {
  const [input, setInput] = useState('');
  const [tone, setTone] = useState('professional');
  const [captions, setCaptions] = useState<CaptionResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toneOptions = [
    { value: 'professional', label: 'Professional' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'trendy', label: 'Trendy' },
    { value: 'promotional', label: 'Promotional' },
  ];

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockCaptions: CaptionResult[] = [
        {
          caption: `Discover ${input} - Transform your ${tone} approach today! 🚀`,
          hashtags: ['#innovation', '#digital', `#${input.toLowerCase().replace(/\s/g, '')}`, '#marketing'],
        },
        {
          caption: `Introducing ${input}: Where quality meets excellence ✨`,
          hashtags: ['#premium', '#quality', '#trending', `#${input.toLowerCase().replace(/\s/g, '')}`],
        },
        {
          caption: `Level up with ${input} - The future is here! 🎯`,
          hashtags: ['#future', '#growth', '#success', '#innovation'],
        },
      ];
      setCaptions(mockCaptions);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Generate Captions & Hashtags
        </h3>

        <div className="space-y-4">
          {/* Product/Topic Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Name / Topic / Campaign Idea
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., 'Diwali Special Offer' or 'New Product Launch'"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Tone Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose Tone
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {toneOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTone(option.value)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all ${
                    tone === option.value
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!input.trim() || loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            {loading ? 'Generating...' : 'Generate Caption'}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {captions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-gray-800">Generated Captions</h4>
            <button
              onClick={handleRegenerate}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition"
            >
              <RotateCcw className="w-4 h-4" />
              Regenerate
            </button>
          </div>

          <div className="grid gap-4">
            {captions.map((result, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  {/* Caption */}
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Caption {index + 1}</p>
                    <p className="text-gray-800 leading-relaxed">{result.caption}</p>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Hashtags</p>
                    <div className="flex flex-wrap gap-2">
                      {result.hashtags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Copy Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(result.caption, index)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-all ${
                        copiedIndex === index
                          ? 'bg-green-100 text-green-700'
                          : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                      }`}
                    >
                      <Copy className="w-4 h-4" />
                      {copiedIndex === index ? 'Copied!' : 'Copy Caption'}
                    </button>
                    <button
                      onClick={() =>
                        copyToClipboard(result.hashtags.join(' '), index + 100)
                      }
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Hashtags
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {captions.length === 0 && !loading && (
        <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
          <Sparkles className="w-12 h-12 text-purple-300 mx-auto mb-4" />
          <p className="text-gray-600">Enter a product name or topic to generate captions</p>
        </div>
      )}
    </div>
  );
}
