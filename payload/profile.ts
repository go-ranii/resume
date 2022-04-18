import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '끊임없이 배우고 성장하는데서 성취감을 얻는 프론트엔드 개발자 김정환입니다.',
  },
  contact: [
    {
      title: 'chanpoong@naver.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com',
      link: 'https://github.com/uyu423/resume-nextjs',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/iu.loen',
      icon: faFacebook,
    },
    {
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
      // icon: faRss,
      icon: faYoutube,
    },
  ],
  notice: {
    title: "This resume is a sample page of 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
