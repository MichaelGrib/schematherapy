import React from 'react';
/* eslint-disable no-unused-expressions */
class Scheme {
    constructor(name, isAdaptive, needs, info){
        this.name = name,
        this.isAdaptive = isAdaptive,
        this.needs = needs,
        this.info = info 
    }
}
class AdaptiveScheme extends Scheme {
    constructor(name, isAdaptive, needs, info){
        super(name, true, needs, info)
    }
}
class MaladaptiveScheme extends Scheme {
    constructor(name, isAdaptive, needs, info){
        super(name, false, needs, info)
    }
}

const schemes = []

function addAdaptiveScheme(name){
    const current = new AdaptiveScheme(name)
    schemes.push(current)
} 
addAdaptiveScheme('Эмоциональная наполненность')
addAdaptiveScheme('Успех')
addAdaptiveScheme('Способность эмпатически учитывать позицию других людей')
addAdaptiveScheme('Базовое здоровье и безопасность / Оптимизм')
addAdaptiveScheme('Эмоциональная открытость и спонтанность')
addAdaptiveScheme('Самосострадание')
addAdaptiveScheme('Здоровые границы / Развитое Я')
addAdaptiveScheme('Социальная принадлежность')
addAdaptiveScheme('Здоровый самоконтроль и самодисциплина')
addAdaptiveScheme('Реалистичные ожидания')
addAdaptiveScheme('Самостоятельность суждений')
addAdaptiveScheme('Здоровый интерес к себе/ Забота о себе')
addAdaptiveScheme('Стабильная привязанность')
addAdaptiveScheme('Здоровая способность полагаться на себя/ Компетентность')



const SchemeCard = ({ name}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 transition-transform transform hover:scale-105">
            <h2 className="text-lg font-bold mb-2">{name}</h2>
        </div>
    );
};

const SchemesList = () => {

    return (
        <div className="flex flex-wrap justify-center">
            {schemes.map((card) => (
                <SchemeCard key={card.name} name={card.name} />
            ))}
        </div>
    );
};
export default SchemesList
