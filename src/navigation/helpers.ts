import {routes} from './constants';
import {useTranslation} from 'react-i18next';

export const getHeaderTitle = (routeName: string | undefined) => {
  const {t} = useTranslation();
  switch (routeName) {
    case routes.Details:
      return t('userDetails.userDetails');
    case routes.Users:
      return t('users.usersList');
    default:
      return '';
  }
};
