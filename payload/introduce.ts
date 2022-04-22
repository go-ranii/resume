import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '1. 팀원과의 커뮤니케이션과 리뷰는 성장을 위한 동력입니다.',

    '본인이 하는 업무에 대한 동료들의 피드백과 그에 대한 리뷰는 어떤 일을 하더라도 중요하게 생각해야 하는 요인이라고 생각합니다.',
    '부트캠프에서 진행했던 프로젝트에서 프론트엔드뿐만 아니라 기획과 github관리를 동시에 맡아 진행하며 기획에 맞춰 개발하기 위해 많은 결정과 의견을 제시했어야 했는데, 팀원들과 매일 정해진 회의를 통해 부족한 부분과 수정이 필요한 부분에 관하여 의견과 피드백을 주고받으며 문제점이나 수정사항을 해결 및 관리하기도 하였고 회의 외 상황에서도 수정이나 피드백이 필요한 부분은 수시로 의견을 교환하며 개발 방향 및 계획을 보완했습니다. 또한 팀 프로젝트의 발표자로서 팀원들의 의견을 종합해 발표 자료를 수정해 강조할 부분과 제외할 부분을 결정했습니다.',
    '이러한 과정을 통해 기획했던 목표대로 프로젝트를 완성할 수 있었고 개발자로서 개발 스킬뿐 아니라 협업을 위한 기초를 쌓을 수 있었던 기회를 가지게 되어 개발자로 한 번 더 성장할 수 있었습니다.',

    '2. 모두를 위한 코드 작성을 지향합니다. ',
    `개발 공부를 처음 할 때의 코드를 보면 제가 작성한 코드인데도 여러 번 봐야 이해가 가는 경우가 생깁니다.
    이런 상황이 협업 중에 발생한다면 분명 오해가 발생할 것입니다. 따라서, 최대한 직관적이고 간결한 코드를 작성해 어떤 팀원이 확인해도 바로 적용하고 사용할 수 있는 코드를 작성하는 것을 지향하며 노력하고 있습니다. 코드를 통한 기능은 컴퓨터가 구현하지만 결국 그 코드를 작성하고 다루는 것은 사람이기에 직관적이고 간결한 코드를 작성하는 것이 팀의 능률을 높이며 좋은 결과를 도출한다고 생각합니다.`,

    '3. 만족하지 않는것, 좋은 개발자가 되기 위한 길이라고 생각합니다.',
    '본인이 원하는 기능을 작성해서 구현하고, 디자인을 구현해 스타일링 하더라도 같은 기능과 디자인이지만 코드를 보면 줄 수부터 간결함까지 차이가 극명하게 갈리는 경우도 있습니다.',
    '실제로 프로젝트를 하는 중 라이브러리를 사용해 Modal을 띄우고 그 내부에서 입력창에 값을 받아오기 위해 코드를 작성한 적이 있었는데 값이 변할 때마다 렌더링이 새로 되어 해당 에러를 해결하기 위해 다양한 시도를 통해 해결한 적도 있었으며 Recharts를 통한 그래프의 구현이나 socket.io 를 사용할 때 혹은 Rest-API를 사용할 때 등 데이터를 불러오고 표현하기까지 스스로가 만족할 때까지 공부하고 새로운 시도를 해보기도 했으며 다른 사람들의 코드와 비교를 통해 수정하기도 하는 등의 노력을 통해 한 줄이라도 발전시키고 만족하는 코드를 구현한 경험이 있습니다.',
    '이런 점을 하나하나 발견하고 공부하여 수정하는 것이 스스로 성장해 가치를 높일 수 있는 과정이라고 확신하며 이런 점에서 속도보다는 코드의 정확성에 중점을 두기 위해 노력하고 있습니다.',
  ],
  sign: 'Jung hwan',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
