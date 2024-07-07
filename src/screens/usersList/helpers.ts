import {Package, User} from '../../common/data/interfaces';

export const extractUniqueUsersAndPackages = (
  packages: Package[],
): {users: User[]; userPackages: Record<string, Package[]>} => {
  const userPackages: Record<string, Package[]> = {};
  const uniqueUsers: User[] = [];

  packages.forEach(pkg => {
    const {recipient} = pkg;
    if (!userPackages[recipient.email]) {
      userPackages[recipient.email] = [];
      uniqueUsers.push(recipient);
    }
    userPackages[recipient.email].push(pkg);
  });

  uniqueUsers.sort((a, b) => a.name.localeCompare(b.name));

  return {users: uniqueUsers, userPackages};
};
