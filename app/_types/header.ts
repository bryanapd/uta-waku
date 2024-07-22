import { ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode;
}

export interface BrandProps {
  logo?: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  onMenuClick?: () => void;
}

export interface RoutesProps {
  path: string;
  label: string;
  key?: string;
  isDivider?: boolean;
  render?: () => ReactNode;
}

export interface LinksProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  direction: "row" | "column";
  children?: ReactNode;
  routes: RoutesProps[];
}
