import React from 'react';
import PropTypes from 'prop-types';

// components
import { Menu } from 'components';

export const DesktopView = ({ isDesktop }) => (
  <Menu view='desktop' paddedItems hoverOn showCounter={isDesktop} />
);

DesktopView.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};
