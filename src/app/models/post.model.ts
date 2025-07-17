export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: Date;
  category: string;
  tags: string[];
  imageUrl?: string;
  readTime: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}
