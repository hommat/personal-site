import SkillSet from 'components/skills/SkillSet';
import { SkillProps } from 'components/skills/Skill';

import ReactSVG from 'assets/logos/react.svg';
import JavascriptSVG from 'assets/logos/javascript.svg';
import CssSVG from 'assets/logos/css.svg';

const skills: SkillProps[] = [
  {
    name: 'React',
    icon: <ReactSVG />,
  },
  {
    name: 'Javascript',
    icon: <JavascriptSVG />,
  },
  {
    name: 'CSS',
    icon: <CssSVG />,
  },
];

export default function Skills() {
  return (
    <section className="section skills container" id="skills">
      <h3 className="section__heading">My skills</h3>

      <div className="skills__grid container">
        <SkillSet heading="I fell confident in" skills={skills} />
        <SkillSet heading="I fell confident in" skills={skills} />
        <SkillSet heading="I fell confident in" skills={skills} />
      </div>
    </section>
  );
}
