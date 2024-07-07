import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {UserListErrorMessegeProps} from '../interfaces';
import theme from '../../../common/styles/theme';
import {useTranslation} from 'react-i18next';

const UserListErrorMessege: React.FC<UserListErrorMessegeProps> = ({
  message,
  onRetry,
}) => {
  const {t} = useTranslation();
  
  return (
    <View style={styles.errorContainer}>
      <Text style={[styles.error, {color: theme.colors.error}]}>{message}</Text>
      <Button title={t('users.retry')} onPress={onRetry} />
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: theme.typography.fontSizes.medium,
    marginBottom: 16,
  },
});

export default UserListErrorMessege;
