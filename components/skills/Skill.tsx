import { ReactNode } from 'react';

export interface SkillProps {
  name: string;
  icon: ReactNode;
}

export default function Skill({ name, icon }: SkillProps) {
  return (
    <li className="skillset__list__item">
      {icon}
      <p className="skillset__list__text">{name}</p>
    </li>
  );
}
