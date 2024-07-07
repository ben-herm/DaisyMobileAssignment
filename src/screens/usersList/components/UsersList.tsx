import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import UserCard from './UserCard';
import {UserListProps} from '../interfaces';

const UserList: React.FC<UserListProps> = ({
  users,
  userPackages,
  onUserCardPress,
}) => {
  return (
    <FlatList
      data={users}
      keyExtractor={item => item.email}
      renderItem={({item}) => (
        <UserCard
          name={item.name}
          email={item.email}
          packageCount={userPackages[item.email].length}
          onPress={() => onUserCardPress(item)}
        />
      )}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default UserList;
