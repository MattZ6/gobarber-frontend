import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '~/pages/_layouts/default/styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
