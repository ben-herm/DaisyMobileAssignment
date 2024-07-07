import {Notification, Package} from '../../common/data/interfaces';
import {NotificationType} from './constants';
import {createNotification} from './notificationfactory';

export const createPackageNotification = (pkg: Package): Notification => {
  return createNotification(NotificationType.SINGLE_PACKAGE, pkg);
};

export const createMultiplePackagesNotification = (
  userPackages: Package[],
  email: string,
): Notification => {
  return createNotification(
    NotificationType.MULTIPLE_PACKAGES,
    userPackages,
    email,
  );
};

export const createNotifications = (userPackagesByEmail: {
  [email: string]: Package[];
}): Notification[] => {
  return Object.keys(userPackagesByEmail).map(email => {
    const userPackages = userPackagesByEmail[email];
    return createMultiplePackagesNotification(userPackages, email);
  });
};
