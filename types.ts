
export type Page = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  title?: string;
}
