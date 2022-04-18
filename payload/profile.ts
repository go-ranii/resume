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
    title: '안녕하세요, 프론트엔드 개발자 김정환입니다.',
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
    title: '끊임없이 배우고 성장하는데서 성취감을 얻는 프론트엔드 개발자 김정환입니다.',
    // icon: faBell,
  },
};

export default profile;
