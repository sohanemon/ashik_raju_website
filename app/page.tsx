import About from './about';
import Header from './header';
import Services from './services';
import Skills from './skills';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      {/* <Services /> */}
    </main>
  );
}
