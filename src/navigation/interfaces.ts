import {Package, User} from '../common/data/interfaces';

export type RootStackParamList = {
  UsersList: undefined;
  Details: {user: User; packages: Package[]};
};
