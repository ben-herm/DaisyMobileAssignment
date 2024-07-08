import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFetchPackages} from './hooks/useFetchPackages';
import {routes} from '../../navigation/constants';
import theme from '../../common/styles/theme';
import LoadingIndicator from '../../common/components/indicators/LoadingIndicator';
import {useNotifyUsers} from './hooks/useNotifyUsers';
import NotificationModal from '../../common/components/modals/NotificationsSuccessModal';
import {useTranslation} from 'react-i18next';
import PrimaryButton from '../../common/components/buttons/PrimaryButton';
import {User} from '../../common/data/interfaces';
import {UsersNavigationProp} from './interfaces';
import UserList from './components/UsersList';
import UserListErrorMessege from './components/ErrorMessege';

const Users: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<UsersNavigationProp>();

  const [modalVisible, setModalVisible] = useState(false);

  const {users, userPackages, loading, error, refetchPackages} =
    useFetchPackages();

  const {notifyLoading, notifyError, notifyAllUsers} =
    useNotifyUsers(userPackages);

  const handleNotifyAllUsers = async () => {
    await notifyAllUsers();
    if (!error) setModalVisible(true);
  };

  const onUserCardPress = (user: User) => {
    navigation.navigate(routes.Details, {
      user,
      packages: userPackages[user.email],
    });
  };

  if (loading) return <LoadingIndicator size={'large'} />;

  if (error)
    return <UserListErrorMessege message={error} onRetry={refetchPackages} />;

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <UserList
        users={users}
        userPackages={userPackages}
        onUserCardPress={onUserCardPress}
      />
      {notifyError && <Text style={styles.errorText}>{notifyError}</Text>}
      <PrimaryButton
        onPress={handleNotifyAllUsers}
        loading={notifyLoading}
        disabled={notifyLoading}
        text={t('users.notifyAllUsers')}
      />
      <NotificationModal
        content={t('notifications.usersNotifiesSuccesssfuly', {
          recipient: 'Users',
        })}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Users;
