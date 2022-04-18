import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'C`earch',
      startedAt: '2022-03',
      endedAt: '2022-04',
      where: 'codeCamp, Team Project',
      descriptions: [
        { content: ' 1:1 채팅 기반 코딩 멘토링 플랫폼' },
        {
          content: 'Role',
          weight: 'MEDIUM',
          descriptions: [
            { content: '서비스 기획 및 발표' },
            { content: '프로젝트 전반 git 관리' },
            { content: 'admin, Question Board 페이지 전담' },
            { content: 'MUI, ant-design, chakra-UI 등 라이브러리 활용' },
          ],
        },
        // {
        //   content: 'admin 페이지',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
        //     { content: 'Integer non turpis ante' },
        //   ],
        // },
        // {
        //   content: 'Launched Bar Service in 2018',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
        //     {
        //       content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   title: 'Lorem ipsum Project',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   where: 'Bar Co., LTD.',
    //   descriptions: [
    //     { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    //     { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
    //     { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
    //     { content: 'Proin bibendum non nibh eu aliquet' },
    //   ],
    // },
  ],
};

export default project;
