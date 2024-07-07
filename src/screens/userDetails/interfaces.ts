import {RouteProp} from '@react-navigation/native';
import {Package, User} from '../../common/data/interfaces';

export type PackageactionButtonProps = {text: string; onPress: () => void};
export type ToggleArrowButtonProps = {isOpen: boolean; onPress: () => void};
export type DetailScreenRouteProp = RouteProp<
  {Details: {user: User; packages: Package[]}},
  'Details'
>;

export interface NotifyUserState {
  loading: boolean;
  error: string | null;
  notifyUser: (userPackages: Package[], email: string) => Promise<void>;
  resetError: () => void;
}
