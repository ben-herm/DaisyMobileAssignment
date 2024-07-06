import {Notification, Package} from '../../common/interfaces';

export const createNotification = (
  userPackages: Package[],
  email: string,
): Notification => {
  const notification = {
    email,
    content: `You have ${userPackages.length} package${userPackages.length > 1 ? 's' : ''} waiting for you.`,
  };

  return notification;
};

export const createNotifications = (userPackagesByEmail: {
  [email: string]: Package[];
}): Notification[] => {
  const notifications = Object.keys(userPackagesByEmail).map(email => {
    const userPackages = userPackagesByEmail[email];
    return createNotification(userPackages, email);
  });

  return notifications;
};
