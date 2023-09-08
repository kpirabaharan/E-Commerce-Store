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
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: string;
  isFeatured: boolean;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
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
