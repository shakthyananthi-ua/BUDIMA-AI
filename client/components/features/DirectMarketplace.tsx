import { useState } from 'react';
import { ShoppingCart, Star, BadgeCheck, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  seller: string;
  verified: boolean;
  image: string;
}

export default function DirectMarketplace() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Handmade Saree',
      price: 2999,
      rating: 4.8,
      reviews: 156,
      seller: 'Artisan Textiles',
      verified: true,
      image: 'bg-purple-400',
    },
    {
      id: '2',
      name: 'Organic Tea Set',
      price: 599,
      rating: 4.6,
      reviews: 89,
      seller: 'Tea Farms Direct',
      verified: true,
      image: 'bg-green-400',
    },
    {
      id: '3',
      name: 'Wooden Handicraft',
      price: 1299,
      rating: 4.7,
      reviews: 203,
      seller: 'Craft Masters',
      verified: true,
      image: 'bg-amber-400',
    },
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    seller: '',
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.seller) {
      setProducts([
        ...products,
        {
          id: String(products.length + 1),
          name: newProduct.name,
          price: parseInt(newProduct.price),
          rating: 4.5,
          reviews: 0,
          seller: newProduct.seller,
          verified: false,
          image: 'bg-blue-400',
        },
      ]);
      setNewProduct({ name: '', price: '', seller: '' });
      setShowAddProduct(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Direct Marketplace
        </h3>
        <button
          onClick={() => setShowAddProduct(!showAddProduct)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Add Product Form */}
      {showAddProduct && (
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="space-y-4">
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              placeholder="Product name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              placeholder="Price (₹)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              value={newProduct.seller}
              onChange={(e) => setNewProduct({ ...newProduct, seller: e.target.value })}
              placeholder="Business name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleAddProduct}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              List Product
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group"
          >
            {/* Product Image */}
            <div className={`${product.image} h-40 flex items-center justify-center relative overflow-hidden`}>
              <div className="text-white text-center">
                <ShoppingCart className="w-12 h-12 mx-auto opacity-50" />
              </div>

              {product.verified && (
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                  <BadgeCheck className="w-3 h-3" />
                  Verified
                </div>
              )}

              <button className="absolute bottom-3 right-3 w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-600 hover:text-white">
                +
              </button>
            </div>

            {/* Product Info */}
            <div className="p-5">
              <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h4>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-800">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
              </div>

              <p className="text-xs text-gray-600 mb-3">{product.seller}</p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="text-2xl font-bold text-purple-600">₹{product.price}</div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold text-sm hover:bg-purple-700 transition">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
        <h4 className="font-semibold text-gray-800 mb-4">Why Buy Direct?</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="flex gap-3">
            <span className="text-lg">✓</span>
            <div>
              <p className="font-medium">Direct from Makers</p>
              <p className="text-gray-600">Support artisans & small businesses</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-lg">✓</span>
            <div>
              <p className="font-medium">Better Prices</p>
              <p className="text-gray-600">No middleman, more savings</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-lg">✓</span>
            <div>
              <p className="font-medium">Real Reviews</p>
              <p className="text-gray-600">Verified buyer feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
