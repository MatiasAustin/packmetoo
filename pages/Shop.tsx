import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('cat') || 'all';
  
  const [filter, setFilter] = useState(initialCategory);

  const categories = [
    { id: 'all', label: 'All Packs' },
    { id: 'kids', label: 'For Kids' },
    { id: 'adults', label: 'Adults' },
    { id: 'pets', label: 'Pets' },
    { id: 'kits', label: 'Bundles' },
  ];

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="pt-24 min-h-screen bg-stone-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-950 mb-4">The Collection</h1>
          <p className="text-stone-600">
            Browse our range of natural repellents. Mix and match to find the perfect protection for your lifestyle.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sticky top-20 z-30 bg-stone-50/95 backdrop-blur py-4 transition-all">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  filter === cat.id 
                    ? 'bg-emerald-900 text-white shadow-lg' 
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-emerald-900">
            <SlidersHorizontal className="w-4 h-4" /> Filter & Sort
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">No products found in this category.</p>
            <button 
              onClick={() => setFilter('all')} 
              className="mt-4 text-emerald-700 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Promo Banner */}
        <div className="mt-20 bg-orange-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-900 mb-2">Unsure what you need?</h3>
            <p className="text-orange-800/80">Take our 30-second quiz to find the perfect pack for your adventure.</p>
          </div>
          <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-colors shadow-sm">
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
