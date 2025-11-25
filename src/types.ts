export const PageRoute = {
  HOME: '/',
  WORK: '/work',
  SERVICES: '/services',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export type PageRoute = (typeof PageRoute)[keyof typeof PageRoute];

export interface NavItem {
  label: string;
  path: PageRoute;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}
