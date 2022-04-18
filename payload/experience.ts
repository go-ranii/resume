import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'codeCamp',
      position: 'Coding BootCamp',
      startedAt: '2022-01',
      endedAt: '2022-04',
      descriptions: [
        'FrontEnd 과정 수료',
        'GCP를 통한 개인 프로젝트 배포',
        // 'Systems Engineering and DevOps',
      ],
      skillKeywords: ['Next.js', 'TypeScript', 'JavaScript', 'Apollo-client', 'GraphQL', 'React'],
    },
    // {
    //   title: '광운대학교 정보과학교육원',
    //   position: '정보보호학과',
    //   startedAt: '2018-03',
    //   endedAt: '2021-12',
    //   descriptions: [
    //     '학사과정',
    //     '휴학',
    //   ],
    //   skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    // },
  ],
};

export default experience;
