// images
import { ReactComponent as DesignSvg } from 'assets/images/pattern-graphic-design.svg';
import { ReactComponent as UISvg } from 'assets/images/pattern-ui-ux.svg';
import { ReactComponent as AppsSvg } from 'assets/images/pattern-apps.svg';
import { ReactComponent as IllustrationSvg } from 'assets/images/pattern-illustrations.svg';
import { ReactComponent as MotionGraphicsSvg } from 'assets/images/pattern-motion-graphics.svg';
import { ReactComponent as PhotographySvg } from 'assets/images/pattern-photography.svg';

export const COLOR_SCHEME = {
  purple_400: '#755cde',
  purple_700: '#552049',
  pink_400: '#f39e9e',
  yellow_400: '#f6a560',
  orange_400: '#eb7565',
  teal_400: '#61c4b7',
  white_400: '#fff7f0',
  grey_400: '#7a746e',
  black_400: '#030303',
};

export const SERVICE_LIST = [
  {
    text: 'Graphic Design',
    svg: DesignSvg,
    color: COLOR_SCHEME.purple_400,
    id: 1,
    gridArea: 'card1',
  },
  {
    text: 'UI/UX',
    svg: UISvg,
    color: COLOR_SCHEME.yellow_400,
    id: 2,
    gridArea: 'card2',
  },
  {
    text: 'Apps',
    svg: AppsSvg,
    color: COLOR_SCHEME.pink_400,
    id: 3,
    gridArea: 'card3',
  },
  {
    text: 'Illustrations',
    svg: IllustrationSvg,
    color: COLOR_SCHEME.orange_400,
    id: 4,
    gridArea: 'card4',
  },
  {
    text: 'Photography',
    svg: PhotographySvg,
    color: COLOR_SCHEME.teal_400,
    id: 5,
    gridArea: 'card5',
  },
  {
    text: 'Motion Graphics',
    svg: MotionGraphicsSvg,
    color: COLOR_SCHEME.purple_700,
    id: 6,
    gridArea: 'card6',
  },
];
