import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadUserRequest } from '~/store/modules/user/actions';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    dispatch(loadUserRequest());
  }, []);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>
                {profile.loading ? 'Carregando...' : profile.name}
              </strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <img
              src={
                !profile.loading && profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
