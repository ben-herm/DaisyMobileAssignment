import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../../../common/styles/theme';
import {Card} from 'react-native-paper';
import {User} from '../../../../common/data/interfaces';

const UserDetailsCard: React.FC<{user: User}> = ({user}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </Card.Content>
    </Card>
  );
};

export default UserDetailsCard;

const styles = StyleSheet.create({
  email: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.text,
  },
  name: {
    fontSize: theme.typography.fontSizes.large,
    marginBottom: 10,
    color: theme.colors.text,
  },
  card: {
    marginBottom: 16,
    backgroundColor: theme.colors.white,
  },
});
