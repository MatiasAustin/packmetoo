import React from 'react';
import Button from '../Button';

const WholesaleForm = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-950 text-center mb-12">Get in Touch</h2>
          <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-stone-50" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-stone-50" />
                  </div>
              </div>
              <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-stone-50" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Estimated Quantity</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-stone-50">
                      <option>50 - 100</option>
                      <option>100 - 500</option>
                      <option>500+</option>
                  </select>
              </div>
              <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-stone-50"></textarea>
              </div>
              <Button fullWidth size="lg">Send Inquiry</Button>
          </form>
      </div>
    </div>
  );
};

export default WholesaleForm;