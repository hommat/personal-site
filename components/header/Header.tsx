import GithubSVG from 'assets/logos/github.svg';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__author">Mateusz Ziomek</h1>
      <h4 className="header__role">Front-End Developer</h4>
      <div className="header__media">
        <a className="header__media__link" title="Github" href="https://github.com/hommat">
          <GithubSVG />
        </a>
      </div>
    </header>
  );
}
