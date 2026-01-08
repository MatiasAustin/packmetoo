import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import { Star, Shield, Droplets, Wind, Plus, Minus, CheckCircle2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Gallery Side */}
          <div className="space-y-4">
            <div className="aspect-square bg-stone-100 rounded-3xl overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-emerald-900 uppercase tracking-wide">
                Best Seller
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <button 
                  key={i}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-emerald-900 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={product.image} className="w-full h-full object-cover" alt="thumbnail" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Side */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-orange-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold text-emerald-950">{product.rating}</span>
                <span className="text-stone-400 underline decoration-stone-300">({product.reviews} reviews)</span>
              </div>
              <h1 className="text-4xl font-bold text-emerald-950 mb-2">{product.name}</h1>
              <p className="text-xl text-stone-500 font-light">{product.subtitle}</p>
            </div>

            <div className="text-3xl font-bold text-emerald-900 mb-8">
              ${product.price.toFixed(2)}
            </div>

            {/* Selector */}
            <div className="mb-8 p-6 bg-stone-50 rounded-2xl border border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-stone-700">Quantity</span>
                <div className="flex items-center gap-4 bg-white rounded-lg p-1 border border-stone-200">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-stone-100 rounded-md transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-stone-100 rounded-md transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart}
                fullWidth 
                size="lg" 
                className="mb-3"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
              <p className="text-xs text-center text-stone-400">Free shipping on orders over $50</p>
            </div>

            {/* Description */}
            <div className="prose prose-stone mb-10">
              <p className="text-stone-600 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Icons / Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full text-emerald-800">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-stone-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Accordion mockup */}
            <div className="border-t border-stone-200 pt-6 space-y-4">
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-emerald-950 list-none">
                  Ingredients
                  <span className="transition group-open:rotate-180">
                    <Plus className="w-5 h-5" />
                  </span>
                </summary>
                <div className="text-stone-500 mt-3 pl-4 leading-relaxed">
                  Active Ingredients: Citronella Oil (10%), Peppermint Oil (5%). <br />
                  Inert Ingredients: Cellulose (85%).
                </div>
              </details>
              <div className="h-px bg-stone-200"></div>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-emerald-950 list-none">
                  How to Use
                  <span className="transition group-open:rotate-180">
                    <Plus className="w-5 h-5" />
                  </span>
                </summary>
                <div className="text-stone-500 mt-3 pl-4 leading-relaxed">
                  Peel sticker and attach to clothing, hats, bags, or strollers. Do not apply directly to skin. Replace every 12 hours.
                </div>
              </details>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
