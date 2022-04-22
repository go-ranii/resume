import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '안녕하세요, 나무같은 개발자 김정환입니다.',
  },
  contact: [
    {
      title: 'chanpoong@naver.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'https://github.com/go-ranii',
      link: 'https://github.com/go-ranii',
      icon: faGithub,
    },
    {
      link: 'https://velog.io/@chanpoong',
      icon: faBlogger,
    },
  ],
  notice: {
    title: `나무는 항상 같은 자리에서 어떤 궂은 환경도 피해 가지 않고 맞서 묵묵히 해결하며 성장해 결국 목표한 과실을 맺어냅니다.
    개발을 공부하기 이전에도 나무 같은 꾸준함을 무기로 자신이 정한 목표가 있다면 도달하기 위해 최선을 다해왔고 바디 프로필 촬영, 자전거 전국 일주, 팀 프로젝트 등의 경험을 토대로 목표를 달성 했을 때의 달콤함 또한 겪어 보았습니다.
    어떤 분야에서도 꾸준하게 배우고 성장하면 결국 달콤한 열매를 맺을 수 있다는 사실을 토대로 항상 도전하고 해결해가는 나무 같은 개발자, 김정환입니다.`,
    // icon: faBell,
  },
};

export default profile;
