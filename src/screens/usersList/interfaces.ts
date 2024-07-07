import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/interfaces';
import {User} from '../../common/data/interfaces';

export type UserCardProps = {
  name: string;
  email: string;
  onPress: () => void;
  packageCount: number;
};

export type UserListProps = {
  users: User[];
  userPackages: {[key: string]: any[]};
  onUserCardPress: (user: User) => void;
};

export type UserListErrorMessegeProps = {
  message: string;
  onRetry: () => void;
};

export type UsersNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Users'
>;
