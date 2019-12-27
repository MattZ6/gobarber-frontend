import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadUserRequest } from '~/store/modules/user/actions';

// import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserRequest());
  }, []);

  return <h1>Dashboard</h1>;
}
