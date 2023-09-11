export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Store {
  id: string;
  name: string;
  limit: number;
  icon: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  amount: number;
  price: string;
  isFeatured: boolean;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Order {
  id: string;
  createdAt: string;
  store: Store;
  isPaid: boolean;
  name: string;
  email: string;
  phone: string;
  address: string;
  orderItems: OrderItem[];
}
export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  product: Product;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}
