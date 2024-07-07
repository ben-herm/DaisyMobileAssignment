import {RouteProp} from '@react-navigation/native';
import {Package, User} from '../../common/data/interfaces';
import {NotificationType} from '../../services/notifications/constants';

export type PackageactionButtonProps = {
  text: string;
  onPress: () => void;
  disabled: boolean;
};
export type ToggleArrowButtonProps = {isOpen: boolean; onPress: () => void};
export type DetailScreenRouteProp = RouteProp<
  {Details: {user: User; packages: Package[]}},
  'Details'
>;

export type AnimatedPackageCardProps = {
  pkg: Package;
  email: string;
  notifyUser: (
    userPackages: Package[],
    email: string,
    type: NotificationType,
  ) => void;
};

export interface NotifyUserState {
  loading: boolean;
  error: string | null;
  notifyUser: (
    userPackages: Package[],
    email: string,
    type: NotificationType,
  ) => Promise<void>;
  notifySingleUser: (
    pkg: Package,
    email: string,
    setLoading: (loading: boolean) => void,
    setError: (error: string | null) => void,
  ) => void;
  resetError: () => void;
}
