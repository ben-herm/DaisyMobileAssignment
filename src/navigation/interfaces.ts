import {Package, User} from '../common/data/interfaces';

export type RootStackParamList = {
  Users: undefined;
  Details: {user: User; packages: Package[]};
};
