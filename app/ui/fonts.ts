import { Inter, Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'],  // Especifica el subconjunto
  weight: ['400', '700'],  // Especifica los pesos que necesitas
});