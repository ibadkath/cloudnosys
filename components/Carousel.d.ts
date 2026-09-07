import type { ReactNode } from "react";

export interface CarouselProps<T = unknown> {
  items?: T[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  renderItem?: (item: T, index: number) => ReactNode;
  containerPadding?: number;
  frameless?: boolean;
  dotGap?: number;
}

declare function Carousel<T = unknown>(props: CarouselProps<T>): JSX.Element;

export default Carousel;
