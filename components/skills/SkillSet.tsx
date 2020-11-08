import Skill, { SkillProps } from 'components/skills/Skill';

export interface SkillSetProps {
  heading: string;
  skills: SkillProps[];
}

export default function SkillSet({ heading, skills }: SkillSetProps) {
  return (
    <div className="skillset">
      <h4 className="skillset__heading">{heading}</h4>
      <ul className="skillset__list">
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </ul>
    </div>
  );
}
