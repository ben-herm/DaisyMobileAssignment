import {Package, User} from '../common/interfaces';

export type RootStackParamList = {
  UsersList: undefined;
  Details: {user: User; packages: Package[]};
};
