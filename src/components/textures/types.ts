export interface Texture {
  id: string;
  name: string;
  lightClasses: string;
  darkClasses: string;
  lightStyle: string;
  darkStyle: string;
  category: 'paper' | 'fabric' | 'natural' | 'abstract';
}