import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(() => notifications.findIndex(x => !x.read) > -1, [
    notifications,
  ]);

  function _formatNotification(notification) {
    const _formatPreffix = type => {
      switch (type) {
        case 'NEW_SCHEDULE':
          return 'Novo agendamento';

        default:
          return '';
      }
    };

    const _formatTimeDistance = date => {
      return formatDistance(parseISO(date), new Date(), {
        addSuffix: true,
        locale: pt,
      });
    };

    const _formatDate = date => {
      return format(parseISO(date), "'dia 'dd' de 'MMMM', às 'HH:mm", {
        locale: pt,
      });
    };

    return {
      ...notification,
      preffix: _formatPreffix(notification.type),
      timeDistance: _formatTimeDistance(notification.createdAt),
      formatedDate: _formatDate(notification.date),
    };
  }

  useEffect(() => {
    async function loadNotifications() {
      // try  {
      const { data } = await api.get('notifications');

      setNotifications(data.map(x => _formatNotification(x)));

      // } cat  ch (err) {}
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    const { data } = await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(x =>
        x._id === data._id ? _formatNotification(data) : x
      )
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>
                {notification.preffix} de <b>{notification.client}</b> para{' '}
                <b>{notification.formatedDate}</b>
              </p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
