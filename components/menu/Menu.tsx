import Nav from 'components/menu/Nav';

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__hamburger" id="hamburger">
        <div className="menu__hamburger__bar"></div>
      </div>

      <Nav />
    </div>
  );
}
