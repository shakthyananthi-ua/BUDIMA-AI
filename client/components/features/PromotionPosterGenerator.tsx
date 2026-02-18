import { useState } from 'react';
import { Wand2, Download, Edit2, Upload } from 'lucide-react';

interface Poster {
  id: string;
  title: string;
  style: string;
  preview: string;
}

export default function PromotionPosterGenerator() {
  const [productName, setProductName] = useState('');
  const [tagline, setTagline] = useState('');
  const [posters, setPosters] = useState<Poster[]>([]);
  const [loading, setLoading] = useState(false);

  const styles = [
    { value: 'modern', label: 'Modern', color: 'from-purple-600 to-blue-500' },
    { value: 'minimal', label: 'Minimal', color: 'from-gray-200 to-gray-300' },
    { value: 'festive', label: 'Festive', color: 'from-orange-400 to-red-500' },
  ];

  const handleGenerate = async () => {
    if (!productName.trim()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockPosters: Poster[] = [
        {
          id: '1',
          title: `${productName} - Modern`,
          style: 'modern',
          preview: `bg-gradient-to-br from-purple-600 to-blue-500`,
        },
        {
          id: '2',
          title: `${productName} - Minimal`,
          style: 'minimal',
          preview: `bg-gradient-to-br from-gray-200 to-gray-300`,
        },
        {
          id: '3',
          title: `${productName} - Festive`,
          style: 'festive',
          preview: `bg-gradient-to-br from-orange-400 to-red-500`,
        },
      ];
      setPosters(mockPosters);
      setLoading(false);
    }, 1500);
  };

  const handleDownload = (poster: Poster) => {
    // Simulate download
    const element = document.createElement('a');
    element.href = '#';
    element.download = `${poster.title.replace(/\s/g, '_')}.png`;
    element.click();
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-purple-600 mb-4 flex items-center gap-2">
          <Wand2 className="w-5 h-5" />
          Create Promotional Poster
        </h3>

        <div className="space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Image (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Drag & drop your image here</p>
              <p className="text-xs text-gray-500">or click to browse</p>
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tagline (Optional)
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g., 'Celebrate in Style'"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!productName.trim() || loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Wand2 className="w-5 h-5" />
            {loading ? 'Generating...' : 'Generate Posters'}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {posters.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-gray-800">Poster Previews</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posters.map((poster) => (
              <div
                key={poster.id}
                className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Poster Preview */}
                <div className={`w-full aspect-square ${poster.preview} flex items-center justify-center relative`}>
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold mb-2">{productName}</p>
                    {tagline && <p className="text-sm opacity-90">{tagline}</p>}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleDownload(poster)}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                  </div>
                </div>

                {/* Poster Info */}
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-700">{poster.title}</p>
                  <p className="text-xs text-gray-500 capitalize">{poster.style} Style</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {posters.length === 0 && !loading && (
        <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <Wand2 className="w-12 h-12 text-purple-300 mx-auto mb-4" />
          <p className="text-gray-600">Enter a product name to generate trendy posters</p>
        </div>
      )}
    </div>
  );
}
