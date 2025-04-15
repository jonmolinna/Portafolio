import Timeline from "../components/common/Timeline";
import SkillBadge from "../components/skill/SkillBadge";
import { skills } from "../data/skill.data";
import { studies } from "../data/study.data";

const Skill = () => {
  return (
    <section className="pt-4 pb-30 max-w-5xl mx-auto px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <aside>
          <p className="text-white text-center text-xl">Habilidades</p>
          <div className="flex flex-wrap mt-5 gap-4">
            {skills.map(({ Icon, technology }, index) => (
              <SkillBadge key={index} Icon={Icon} technology={technology} />
            ))}
          </div>
        </aside>
        <aside>
          <h4 className="text-white text-center text-xl">Formación</h4>
          <div className="mt-5">
            <Timeline data={studies} />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Skill;
