// images
import avatarAngela from 'assets/images/avatar-angela-gray.webp';
import avatarMark from 'assets/images/avatar-mark-webber.webp';
import avatarAnna from 'assets/images/avatar-anna-kim.webp';
import avatarKimberly from 'assets/images/avatar-kimberly-smith.webp';
import avatarRizky from 'assets/images/avatar-rizky-hasanuddin.webp';
import avatarNathan from 'assets/images/avatar-nathan-peterson.webp';
import avatarJacob from 'assets/images/avatar-jacob-thompson.webp';
import imageChess from 'assets/images/image-chess.webp';

export const DUMMY_DATA = [
  {
    id: 1,
    user: {
      name: 'Angela Gray',
      avatar: avatarAngela,
      action: {
        description: 'followed you',
        title: null,
        url: '#',
        message: null,
        image: null,
      },
    },
    timeSince: 30,
    read: false,
  },
  {
    id: 2,
    user: {
      name: 'Anna Kim',
      avatar: avatarAnna,
      action: {
        description: 'left the group',
        title: 'Chess Club',
        url: '#',
        message: null,
        image: null,
      },
    },
    timeSince: 300,
    read: false,
  },
  {
    id: 3,
    user: {
      name: 'Kimberly Smith',
      avatar: avatarKimberly,
      action: {
        description: 'commented on your picture',
        title: null,
        url: '#',
        message: null,
        image: imageChess,
      },
    },
    timeSince: 8570,
    read: false,
  },
  {
    id: 4,
    user: {
      name: 'Rizky Hasanuddin',
      avatar: avatarRizky,
      action: {
        description: 'sent you a private message',
        title: null,
        url: '#',
        message:
          'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
        image: null,
      },
    },
    timeSince: 430000,
    read: false,
  },
  {
    id: 5,
    user: {
      name: 'Mark Webber',
      avatar: avatarMark,
      action: {
        description: 'reacted to your post',
        title: 'My first tournament today!',
        url: '#',
        message: null,
        image: null,
      },
    },
    timeSince: 9076000,
    read: false,
  },
  {
    id: 6,
    user: {
      name: 'Nathan Peterson',
      avatar: avatarNathan,
      action: {
        description: 'reacted to your post',
        title: '5 end-game strategies to increase your win rate',
        url: '#',
        message: null,
        image: null,
      },
    },
    timeSince: 24000,
    read: false,
  },
  {
    id: 7,
    user: {
      name: 'Jacob Thompson',
      avatar: avatarJacob,
      action: {
        description: 'has joined your group',
        title: 'Chess Club',
        url: '#',
        message: null,
        image: null,
      },
    },
    timeSince: 0,
    read: false,
  },
];
