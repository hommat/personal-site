import { ReactNode } from 'react';

export interface NavItemProps {
  href: string;
  children?: ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <li className="nav__item">
      <a className="nav__link" href={href}>
        {children}
      </a>
    </li>
  );
}
