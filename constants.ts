import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kids Adventure Pack',
    subtitle: 'Fun shapes, serious protection.',
    price: 14.00,
    image: 'https://picsum.photos/seed/kids1/800/800',
    category: 'kids',
    rating: 4.9,
    reviews: 128,
    description: 'Our signature DEET-free stickers infused with citronella and eucalyptus oil. Safe for sensitive skin because they go on clothes, not skin.',
    benefits: ['12h Protection', '100% Natural', 'Waterproof', 'Fun Animal Shapes']
  },
  {
    id: '2',
    name: 'Explorer Essentials',
    subtitle: 'Minimalist design for adults.',
    price: 16.00,
    image: 'https://picsum.photos/seed/hiker/800/800',
    category: 'adults',
    rating: 4.8,
    reviews: 85,
    description: 'Discreet protection for hiking, gardening, or patio dining. Blends in with your gear while keeping the bugs at bay.',
    benefits: ['Plant-based', 'Resealable Bag', 'No Sticky Residue', 'Long-lasting']
  },
  {
    id: '3',
    name: 'Pet Guard Tags',
    subtitle: 'Collar-ready protection.',
    price: 15.00,
    image: 'https://picsum.photos/seed/doggo/800/800',
    category: 'pets',
    rating: 4.7,
    reviews: 210,
    description: 'Specially formulated for furry friends. Attach to collars or harnesses to keep fleas and mosquitoes away during walks.',
    benefits: ['Vet Approved Ingredients', 'Durable Adhesive', 'Calming Scent', 'All-weather']
  },
  {
    id: '4',
    name: 'Family Mega Bundle',
    subtitle: 'Summer supply for everyone.',
    price: 45.00,
    image: 'https://picsum.photos/seed/familypic/800/800',
    category: 'kits',
    rating: 5.0,
    reviews: 42,
    description: 'Get fully equipped for the season. Includes 2 Kids Packs, 2 Adult Packs, and 1 Pet Pack. Best value for active families.',
    benefits: ['Save 20%', 'Free Travel Pouch', 'Mix & Match Designs', 'Gift Ready']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Mom of 3',
    text: "Finally, something that isn't a sticky spray. The kids actually ask to put these on!",
    rating: 5
  },
  {
    id: 't2',
    name: 'Mark O.',
    role: 'Trail Runner',
    text: "I kept one on my hat during a 4-hour run. Zero bites. Minimal design is a huge plus.",
    rating: 5
  },
  {
    id: 't3',
    name: 'GreenCorp Inc.',
    role: 'Company Retreat',
    text: "Ordered the branded packs for our company offsite. Huge hit with the team.",
    rating: 5
  }
];
