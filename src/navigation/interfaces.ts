import {Package} from '../common/interfaces';

export type RootStackParamList = {
  UsersList: undefined;
  Details: {email: string; packages: Package[]};
};
