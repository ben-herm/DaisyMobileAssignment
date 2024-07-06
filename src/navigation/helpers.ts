import {routes} from './constants';
import {useTranslation} from 'react-i18next';

export const getHeaderTitle = (routeName: string | undefined) => {
  const {t} = useTranslation();
  switch (routeName) {
    case routes.Details:
      return t('userDetails.userDetails');
    case routes.UsersList:
      return t('usersList.usersList');
    default:
      return '';
  }
};
