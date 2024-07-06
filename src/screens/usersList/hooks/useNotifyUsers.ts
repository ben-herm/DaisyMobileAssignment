import {useState} from 'react';
import {Package} from '../../../common/interfaces';
import {createNotifications} from '../../../services/notifications/notificationsService';
import {sendNotifications} from '../../../services/api/NotificationsApi';

export const useNotifyUsers = (userPackages: {[email: string]: Package[]}) => {
  const [notifyLoading, setNotifyLoading] = useState(false);
  const [notifyError, setNotifyError] = useState<string | null>(null);

  const notifyAllUsers = async () => {
    setNotifyLoading(true);
    setNotifyError(null);
    const notifications = createNotifications(userPackages);
    try {
      await sendNotifications(notifications);
    } catch (err: any) {
      setNotifyError(err.message);
    } finally {
      setNotifyLoading(false);
    }
  };

  return {
    notifyLoading,
    notifyError,
    notifyAllUsers,
  };
};
