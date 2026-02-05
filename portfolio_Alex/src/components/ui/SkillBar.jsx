import React from 'react';
import { getLevelColor, getLevelWidth } from '../../data/skills';

export default function SkillBar({ skill }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300">{skill.name}</span>
        <span className="text-slate-400 text-sm">{skill.level}</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div 
          className={`${getLevelColor(skill.level)} h-2 rounded-full transition-all duration-500`}
          style={{ width: getLevelWidth(skill.level) }}
        />
      </div>
    </div>
  );
}