import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Avatar, IconButton, Text} from 'react-native-paper';
import theme from '../../../common/styles/theme';
import {UserCardProps} from '../interfaces';

const UserCard: React.FC<UserCardProps> = ({
  name,
  email,
  onPress,
  packageCount,
}) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Title
        title={<Text style={styles.title}>{name}</Text>}
        subtitle={<Text style={styles.email}>{email}</Text>}
        left={() => (
          <Avatar.Text
            size={48}
            label={name.charAt(0)}
            style={styles.avatar}
            color={theme.colors.white}
          />
        )}
        right={() => (
          <View style={styles.rightContainer}>
            <Text
              style={styles.packageCount}>{`${packageCount} packages`}</Text>
            <IconButton icon="chevron-right" size={24} onPress={onPress} />
          </View>
        )}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative', // Needed for absolute positioning
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSizes.large,
    fontWeight: '800',
  },
  email: {
    color: theme.colors.placeholder,
    fontSize: theme.typography.fontSizes.medium,
  },
  rightContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  packageCount: {
    color: theme.colors.black,
    padding: 5,
    borderRadius: 10,
    fontSize: theme.typography.fontSizes.small,
    fontWeight: '600',
    margin: 8,
  },
});

export default UserCard;
