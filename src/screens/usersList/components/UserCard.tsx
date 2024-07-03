import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Avatar, IconButton} from 'react-native-paper';
import theme from '../../../common/styles/theme';

interface UserCardProps {
  name: string;
  email: string;
  onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = React.memo(
  ({name, email, onPress}) => {
    return (
      <Card style={styles.card} onPress={onPress}>
        <Card.Title
          title={name}
          titleStyle={styles.title}
          subtitle={email}
          subtitleStyle={styles.subtitle}
          left={() => (
            <Avatar.Text
              size={48}
              label={name.charAt(0)}
              style={styles.avatar}
              color={theme.colors.surface}
            />
          )}
          right={() => (
            <IconButton icon="chevron-right" size={24} onPress={onPress} />
          )}
        />
      </Card>
    );
  },
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.surface,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSizes.large,
    fontWeight: '800',
  },
  subtitle: {
    color: theme.colors.placeholder,
    fontSize: theme.typography.fontSizes.medium,
  },
});

export default UserCard;
