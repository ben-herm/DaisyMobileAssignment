import {Notification, Package} from '../../common/data/interfaces';
import {NotificationType} from './constants';

const createSinglePackageNotification = (pkg: Package): Notification => {
  return {
    email: pkg.recipient.email,
    content: `You have a package (${pkg.type}) waiting for you.`,
  };
};

const createMultiplePackagesNotification = (
  userPackages: Package[],
  email: string,
): Notification => {
  const packageTypes = userPackages.map(pkg => pkg.type).join(', ');
  return {
    email,
    content: `You have ${userPackages.length} package${userPackages.length > 1 ? 's' : ''} (${packageTypes}) waiting for you.`,
  };
};

export const createNotification = (
  type: NotificationType,
  packages: Package[] | Package,
  email?: string,
): Notification => {
  switch (type) {
    case NotificationType.SINGLE_PACKAGE:
      return createSinglePackageNotification(packages as Package);
    case NotificationType.MULTIPLE_PACKAGES:
      return createMultiplePackagesNotification(packages as Package[], email!);
    default:
      throw new Error('Invalid notification type');
  }
};
