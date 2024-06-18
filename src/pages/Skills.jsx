import React from 'react';
import '../styles/Skills.css'; 

const Skills = () => {
  const frontendSkills = ['ReactJS', 'HTML', 'CSS', 'Git', 'Figma', 'Redux Toolkit'];
  const languages = [
    { name: 'JavaScript', level: '70%' },
    { name: 'Python', level: '40%' },
    { name: 'C#', level: '40%' }
  ];

  return (
    <div className='skills'>
      <div className='frontend-container'>
        <h1>Frontend</h1>
        <p className='frontend-skills'>{frontendSkills.join(', ')}</p>
      </div>

      <div className='languages-container'>
        <h1>Languages</h1>
        {languages.map((language) => (
          <div className='language' key={language.name}>
            <span className='name'>{language.name}</span>
            <div className='level-container'>
              <div className='level' style={{ width: language.level }}>
                <span className='percentage'>{language.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
