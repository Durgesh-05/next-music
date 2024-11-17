import { ChooseUs } from '@/components/ChooseUs';
import { FeaturedCourses } from '@/components/FeaturedCourses';
import { Instructor } from '@/components/Instructor';
import { Hero } from '@/components/Hero';
import { MovingCards } from '@/components/MovingCards';
import { UpcomingWebinars } from '@/components/UpcomingWebinars';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <Hero />
      <FeaturedCourses />
      <ChooseUs />
      <MovingCards />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
