import styled from 'styled-components';
import { variant } from 'styled-system';

export const PanelStyle = styled('div')(
    variant({
      scale: 'panel',
      variants: {
        center: {},
        sub: {},
        centerStepTwoIem: {}
      },
    }),
);

export const PanelItemStyle = styled('div')(
  variant({
    scale: 'panelItem',
    variants: {
      centerStepTwoIem: {}
    },
  }),
);

export const ContentStyle = styled('div')(
    variant({
      scale: 'content',
      variants: {
        primary: {}
      },
    }),
);

export const NavStyle = styled('div')(
    variant({
      scale: 'nav',
      variants: {
        primary: {},
        secondary: {},
      },
    }),
);

export const NavItemStyle = styled('button')(
    variant({
      scale: 'navItem',
      variants: {
        primary: {}
      },
    }),
);

export const TitleStyle = styled('div')(
  variant({
    scale: 'title',
    variants: {
      main: {},
      center: {},
      sub: {}

    },
  }),
);

export const NextStepButtonStyle = styled('button')(
  variant({
    scale: 'nextStepButton',
    variants: {
      focus: {},
      unFocus: {}
    },
  }),
);

export const BackStepButtonStyle = styled('button')(
  variant({
    scale: 'backStepButton',
    variants: {
      focus: {},
      unFocus: {}
    },
  }),
);

export const InputStyle = styled('input')(
  variant({
    scale: 'input',
    variants: {
      primary: {},
    },
  }),
);

export const LabelStyle = styled('div')(
  variant({
    scale: 'label',
    variants: {
      primary: {},
    },
  }),
);

export const ColorCircleBarStyle = styled('div')(
  variant({
    scale: 'colorCircleBar',
    variants: {
      primary: {},
    },
  }),
);

export const DropDownStyle = styled('select')(
  variant({
    scale: 'dropDown',
    variants: {
      primary: {},
    },
  }),
);
