import React from 'react';
import { Building2, Users, Gift } from 'lucide-react';

const WholesaleFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-800 mb-6">
                  <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">Bulk Volume Pricing</h3>
              <p className="text-stone-500">Tiered discounts starting at 50 units. Perfect for large teams or resale.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">Custom Branding</h3>
              <p className="text-stone-500">Add your logo to our packs. Create a memorable swag item they'll actually use.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-950 mb-3">Dedicated Support</h3>
              <p className="text-stone-500">Account manager for orders over 500 units. Fast shipping worldwide.</p>
          </div>
      </div>
    </div>
  );
};

export default WholesaleFeatures;