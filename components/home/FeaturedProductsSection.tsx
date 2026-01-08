import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../Button';
import ProductCard from '../ProductCard';
import { PRODUCTS } from '../../constants';

const FeaturedProductsSection = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">Choose Your Pack</h2>
            <p className="text-stone-500">Protection for every member of the family.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-emerald-800 font-semibold hover:gap-3 transition-all">
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/shop">
            <Button variant="outline" fullWidth>View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;