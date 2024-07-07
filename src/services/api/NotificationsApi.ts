import {Notification} from '../../common/data/interfaces';
import {apiConfig} from './config';
import api from './index';

export const sendNotifications = async (
  notifications: Notification[],
): Promise<string> => {
  try {
    const response = await api.post(apiConfig.endpoints.sendNotifications, {
      notify: notifications,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to send notifications',
    );
  }
};
