import type { NavItem, Project, Service } from './types';
import { PageRoute } from './types';

export const BRAND_NAME = "ELYVRA STUDIO";

export const NAVIGATION: NavItem[] = [
  { label: 'Work', path: PageRoute.WORK },
  { label: 'Services', path: PageRoute.SERVICES },
  { label: 'About', path: PageRoute.ABOUT },
  { label: 'Contact', path: PageRoute.CONTACT },
];

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'AERA',
    category: 'Generative Intelligence Engine',
    year: '2024',
    image: 'https://picsum.photos/1920/1080?random=10',
    description: 'A personal generative intelligence engine acting as a second brain. AERA integrates deep context awareness with autonomous reasoning to augment human potential.'
  },
  {
    id: '02',
    title: 'FutureValidate',
    category: 'AI Trust & Validation',
    year: '2024',
    image: 'https://picsum.photos/1920/1080?random=11',
    description: 'An AI-driven trust validation system ensuring data integrity in automated workflows, bridging the gap between verification and intelligence.'
  },
  {
    id: '03',
    title: 'XpenseMate',
    category: 'Intelligent Finance',
    year: '2023',
    image: 'https://picsum.photos/1920/1080?random=12',
    description: 'Intelligent financial analysis companion providing real-time insights, predictive modeling, and spending optimization for personal and business contexts.'
  },
  {
    id: '04',
    title: 'PlaylistPromise',
    category: 'Cinematic Audio Product',
    year: '2023',
    image: 'https://picsum.photos/1920/1080?random=13',
    description: 'A cinematic, Spotify-driven emotional product that transforms listening habits into immersive visual narratives using WebGL.'
  },
  {
    id: '05',
    title: 'Aurin',
    category: 'Web3 Infrastructure',
    year: '2022',
    image: 'https://picsum.photos/1920/1080?random=14',
    description: 'Blockchain-powered system for immutable academic and land records, ensuring transparency, security, and decentralized identity management.'
  },
  {
    id: '06',
    title: 'Opportunity Agent',
    category: 'Autonomous Automation',
    year: '2025',
    image: 'https://picsum.photos/1920/1080?random=15',
    description: 'An autonomous agent suite that scrapes, filters, and manages expiry data to surface high-value opportunities in real-time before they vanish.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'AI Agents & Automation',
    description: 'We engineer the cognitive layer of your business.',
    features: ['Orchestration', 'Data Intelligence', 'Custom GPTs', 'Autonomous Workflows'],
    icon: 'cpu'
  },
  {
    id: 's2',
    title: 'Web Development',
    description: 'Cinematic frontends meets military-grade backends.',
    features: ['Next.js Architecture', 'Full-Stack Systems', 'High-Performance', 'Scalable Infra'],
    icon: 'code'
  },
  {
    id: 's3',
    title: 'Web3 Engineering',
    description: 'Decentralized systems built for trust and identity.',
    features: ['Smart Contracts', 'On-Chain Identity', 'Security Audits', 'dApp Development'],
    icon: 'layers'
  },
  {
    id: 's4',
    title: 'Design & Experience',
    description: 'Visual storytelling that compels and converts.',
    features: ['Brand Identity', 'UI/UX Design', 'WebGL Interactions', 'Motion Systems'],
    icon: 'aperture'
  }
];