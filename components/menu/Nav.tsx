import NavItem from 'components/menu/NavItem';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </ul>
    </nav>
  );
}
