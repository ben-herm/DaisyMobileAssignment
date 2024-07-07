import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/interfaces';

export type UserCardProps = {
  name: string;
  email: string;
  onPress: () => void;
  packageCount: number;
}

export type UserListErrorMessegeProps = {
  message: string;
  onRetry: () => void;
};

export type UsersListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UsersList'
>;
