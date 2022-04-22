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
          content: 'What did I do?',
          weight: 'MEDIUM',
          descriptions: [
            { content: '서비스 기획 및 발표' },
            { content: '프로젝트 전반 git 관리' },
            { content: 'admin, Question Board 페이지 전담' },
            { content: 'MUI, ant-design, chakra-UI, ReCharts 등 라이브러리 활용' },
          ],
        },
        {
          content: '포트폴리오 URL: ',
          postHref: 'https://ten-guide-265.notion.site/C-earch-826588c1b8d54cbf9bcdc25b957a3666',
        },
      ],
    },
    {
      title: '로스트아크 커뮤니티',
      startedAt: '2022-02',
      where: '개인 프로젝트',
      descriptions: [
        { content: '게임 유저들을 위한 커뮤니티 사이트' },
        {
          content: 'What did I do?',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'OpenAPI를 활용한 데아터 불러오기' },
            { content: 'Rest-API와 GraphQL을 혼용하여 데이터 요청' },
            { content: '권한 분기 및 정규 표현식 등의 기술 활용' },
            { content: 'MUI, ant-design 등 라이브러리 활용' },
          ],
        },
        {
          content: '포트폴리오 URL: ',
          postHref: 'https://ten-guide-265.notion.site/e125d9d595fd43d5a997c51febbdea27',
        },
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
