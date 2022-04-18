import { ISkill } from '../component/skill/ISkill';

// const backend: ISkill.Skill = {
//   category: 'Back-end',
//   items: [
//     {
//       title: 'Node.js',
//       level: 3,
//     },
//     {
//       title: 'AWS',
//       level: 3,
//     },
//     {
//       title: 'PHP',
//       level: 2,
//     },
//     {
//       title: 'Java',
//       level: 1,
//     },
//     {
//       title: 'Python',
//       level: 1,
//     },
//     {
//       title: 'C/C++',
//       level: 1,
//     },
//   ],
// };

// const database: ISkill.Skill = {
//   category: 'Database',
//   items: [
//     {
//       title: 'MySQL',
//       level: 3,
//     },
//     {
//       title: 'Oracle',
//       level: 2,
//     },
//     {
//       title: 'Redis',
//       level: 2,
//     },
//     {
//       title: 'MongoDB',
//       level: 1,
//     },
//   ],
// };

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Next.js',
      level: 3,
    },
    {
      title: 'React/React-hooks',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'Typescript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'Styled-component & emotion',
      level: 3,
    },
    {
      title: 'GraphQL & Apollo Client',
      level: 3,
    },
    {
      title: 'restAPI & Axios',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Socket.io',
    },
    {
      title: 'Google Cloud Platform',
    },
    {
      title: 'Docker',
    },
    {
      title: 'VS Code',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
