import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import theme from '../../common/styles/theme';
import {useTranslation} from 'react-i18next';
import {DetailScreenRouteProp} from './interfaces';
import useNotifyUser from './hooks/useNotifyUser';
import NotificationModal from '../../common/components/modals/NotificationsSuccessModal';
import PrimaryButton from '../../common/components/buttons/PrimaryButton';
import {NotificationType} from '../../services/notifications/constants';
import AnimatedPackageCard from './components/PackageDetails/AnimatedPackageCard';
import UserDetailsCard from './components/PackageDetails/UserDetailsCard';

const UserDetails: React.FC = () => {
  const {t} = useTranslation();
  const route = useRoute<DetailScreenRouteProp>();
  const {loading, error, notifyUser, notifySingleUser, resetError} =
    useNotifyUser();

  const [modalVisible, setModalVisible] = useState(false);

  const {user, packages: userPackages} = route.params;

  const notifyUserAllPackages = async () => {
    await notifyUser(
      userPackages,
      user.email,
      NotificationType.MULTIPLE_PACKAGES,
    );
    if (!error) setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <UserDetailsCard user={user} />
      <Text style={styles.header}>{t('userDetails.packages')}</Text>
      {userPackages.map(pkg => (
        <AnimatedPackageCard
          key={pkg.id}
          pkg={pkg}
          notifySingleUser={notifySingleUser}
          email={user.email}
        />
      ))}
      {error && (
        <Text style={styles.errorText} onPress={resetError}>
          {error}
        </Text>
      )}
      <PrimaryButton
        onPress={notifyUserAllPackages}
        loading={loading}
        disabled={loading}
        text={t('userDetails.notifyUser')}
      />
      <NotificationModal
        content={t('notifications.usersNotifiesSuccesssfuly', {
          recipient: 'User',
        })}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  header: {
    fontSize: theme.typography.fontSizes.large,
    alignSelf: 'center',
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 10,
  },
  button: {
    marginTop: 16,
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    padding: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: '800',
    color: theme.colors.white,
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default UserDetails;
