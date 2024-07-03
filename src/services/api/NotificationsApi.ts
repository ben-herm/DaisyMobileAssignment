import { Notification } from '../../common/interfaces';
import api from './index';

export const sendNotifications = async (
  notifications: Notification[],
): Promise<string> => {
  const response = await api.post('/qru1b8pse4hcr12ojiyala2wigym8h4y', {
    notify: notifications,
  });

  return response.data;
};
