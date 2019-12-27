import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from '~/pages/_layouts/default/styles';

import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
