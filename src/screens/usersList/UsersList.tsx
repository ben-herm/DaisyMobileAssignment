import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/interfaces';
import {useFetchPackages} from './hooks/useFetchPackages';
import {routes} from '../../navigation/constants';
import theme from '../../common/styles/theme';
import UserCard from './components/UserCard';

type UsersListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UsersList'
>;

const UsersList: React.FC = () => {
  const navigation = useNavigation<UsersListNavigationProp>();

  const {users, userPackages, loading, error} = useFetchPackages();

  const onUserCardPress = (email: string) => {
    navigation.navigate(routes.Details, {email, packages: userPackages[email]});
  };

  if (loading) {
    return (
      <ActivityIndicator
        style={styles.loader}
        size="large"
        color={theme.colors.primary}
      />
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={[styles.error, {color: theme.colors.error}]}>{error}</Text>
        <Button title="Retry" onPress={() => useFetchPackages()} />
      </View>
    );
  }

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <FlatList
        data={users}
        keyExtractor={item => item.email}
        renderItem={({item}) => (
          <UserCard
            name={item.name}
            email={item.email}
            onPress={() => onUserCardPress(item.email)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default UsersList;
