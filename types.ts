export interface SlideProps {
  isActive: boolean;
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
}

export interface LayoutProps {
  children: React.ReactNode;
  slideNumber?: number;
  title?: string;
  showFooter?: boolean;
}