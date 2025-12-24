import { ReactNode } from "react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface TimeOfDay {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  textColor: string;
}