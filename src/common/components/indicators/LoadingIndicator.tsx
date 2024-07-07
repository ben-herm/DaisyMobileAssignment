import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const LoadingIndicator: React.FC<{size: 'small' | 'large' | undefined}> = ({
  size,
}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={size} color={theme.colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicator;
