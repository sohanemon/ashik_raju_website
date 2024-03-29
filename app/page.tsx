import About from './about';
import Contact from './contact';
import Header from './header';
import Services from './services';
import Skills from './skills';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <About />
      <Skills />
      {/* <Services /> */}
      <Contact />
    </main>
  );
}
