import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const LoadingIndicator: React.FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={theme.colors.black} />
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
