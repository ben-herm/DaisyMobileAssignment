import {useState} from 'react';
import {Package} from '../../../common/data/interfaces';
import {sendNotifications} from '../../../services/api/NotificationsApi';
import {NotifyUserState} from '../interfaces';
import {createNotification} from '../../../services/notifications/notificationfactory';
import {NotificationType} from '../../../services/notifications/constants';

const useNotifyUser = (): NotifyUserState => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const notifyUser = async (
    userPackages: Package[],
    email: string,
    type: NotificationType,
  ) => {
    setLoading(true);
    setError(null);
    const notification = createNotification(type, userPackages, email);
    try {
      await sendNotifications([notification]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const notifySingleUser = async (
    pkg: Package,
    email: string,
    setLoading: (loading: boolean) => void,
    setError: (error: string | null) => void,
  ) => {
    setLoading(true);
    setError(null);
    const notification = createNotification(
      NotificationType.SINGLE_PACKAGE,
      pkg,
      email,
    );
    try {
      await sendNotifications([notification]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetError = () => setError(null);

  return {loading, error, notifyUser, notifySingleUser, resetError};
};

export default useNotifyUser;
