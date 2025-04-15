import React from "react";

type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  technology: string;
};

const SkillBadge: React.FC<Props> = ({ Icon, technology }) => {
  return (
    <div className="flex space-x-2 items-center px-5 py-2.5 text-base font-medium text-center rounded-lg bg-zinc-500 text-white">
      <Icon />
      <span>{technology}</span>
    </div>
  );
};

export default SkillBadge;
