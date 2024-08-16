import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="damilare.png" alt="damilare" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Oludire Damilare</h1>
      <p>
        Full-stack web developer at Google. When not coding or solving problems,
        I like to play console games, cook, watch football, or enjoy the
        Maldives sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map(skill => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  // console.log(skillObj);
  const style = { backgroundColor: `${skillObj.color}` };
  return (
    <li className="skill" style={style}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === 'beginner' && '👶'}
        {skillObj.level === 'intermediate' && '👍'}
        {skillObj.level === 'advanced' && '⭐'}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
