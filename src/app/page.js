import { Footer } from '@/sections/footer';
import { Hero } from '@/sections/hero';
import { Portfolio } from '@/sections/portfolio';
import { Skills } from '@/sections/skills';
import { Tecnologies } from '@/sections/tecnologies';
import Image from 'next/image';
//import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Tecnologies />
      <Portfolio />
      <Footer />
    </main>
  );
}
