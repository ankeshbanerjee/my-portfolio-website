import React from "react";

interface Props {
  name: string;
  icon: React.ReactNode;
}

const SkillItem: React.FC<Props> = ({ icon, name }) => {
  return (
    <div className="flex items-center justify-center px-4 py-3 bg-gray-300 rounded-lg gap-2">
      {icon}
      <p className="text-sm lg:text-base font-semibold">{name}</p>
    </div>
  );
};

export default SkillItem;
