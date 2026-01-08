import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col h-full border-2 border-stone-100 hover:border-emerald-200">
      
      {/* Image Container */}
      <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-stone-50 mb-4">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        
        {/* Quick Add Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-3 right-3 w-12 h-12 bg-white text-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 hover:text-white transition-all transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 border-2 border-emerald-50"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-2 pb-2 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-heading font-bold text-brand-dark text-xl leading-tight group-hover:text-emerald-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2 font-medium">{product.subtitle}</p>
        
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-dashed border-stone-200">
            <span className="font-heading font-bold text-lg text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
                ${product.price}
            </span>
            <div className="flex items-center gap-1">
                <div className="flex text-brand-yellow text-sm">
                    {'★'.repeat(Math.round(product.rating))}
                </div>
                <span className="text-xs text-stone-400 font-bold">({product.reviews})</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;