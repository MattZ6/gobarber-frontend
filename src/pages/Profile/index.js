import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from '~/pages/Profile/components/AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const updating = useSelector(state => state.user.updating);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="passwordConfirmation"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">
          {updating ? 'Atualizando...' : 'Atualiza perfil'}
        </button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
