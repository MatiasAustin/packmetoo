export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  category: 'kids' | 'adults' | 'pets' | 'kits';
  rating: number;
  reviews: number;
  description: string;
  benefits: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
