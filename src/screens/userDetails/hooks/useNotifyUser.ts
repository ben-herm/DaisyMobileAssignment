import {useState} from 'react';
import {Package} from '../../../common/interfaces';
import {createNotification} from '../../../services/notifications/notificationsService';
import {sendNotifications} from '../../../services/api/NotificationsApi';
import {NotifyUserState} from '../interfaces';

const useNotifyUser = (): NotifyUserState => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const notifyUser = async (userPackages: Package[], email: string) => {
    setLoading(true);
    setError(null);
    const notification = createNotification(userPackages, email);
    try {
      await sendNotifications([notification]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetError = () => setError(null);

  return {loading, error, notifyUser, resetError};
};

export default useNotifyUser;
