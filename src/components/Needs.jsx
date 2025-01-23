import React from 'react';

const Needs = () => {
    const groupsOfNeeds = [
        "Надежная привязанность",
        "Автономия",
        "Реалистичные границы",
        "Выражение своих чувств",
        "Спонтанность и игра"
    ]
    const needs = [
        ["Любовь и принятие", groupsOfNeeds[0]],
        ["Безопасность и защита", groupsOfNeeds[0]],
        ["Понимание и сострадание", groupsOfNeeds[0]],
        ["Поддержка и поощрение", groupsOfNeeds[0]],
        ["Наставничество и направление", groupsOfNeeds[0]],
        ["Стабильность и предсказуемость", groupsOfNeeds[0]],
    
        ["Автономия и компетентность"],
        ["Четкие границы"],
        ["Свободное выражение потребностей и эмоций"],
        ["Cпонтанность и игра"]
    ]
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Базовые эмоциональные потребности</h2>
      <ul className="bg-blue-100 p-4 rounded-md shadow-md">
        {needs.map((need, index) => (
          <li key={index} className="p-2 border-b last:border-b-0">
            {need[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Needs;