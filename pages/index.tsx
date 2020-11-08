import Menu from 'components/menu/Menu';
import Header from 'components/header/Header';
import Skills from 'components/skills/Skills';
import Projects from 'components/projects/Projects';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
