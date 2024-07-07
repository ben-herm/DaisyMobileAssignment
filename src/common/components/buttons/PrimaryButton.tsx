import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {PrimaryButtonProps} from '../../data/interfaces';
import theme from '../../styles/theme';
import {ActivityIndicator} from 'react-native-paper';

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  loading,
  disabled,
  text,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}
      disabled={disabled}>
      <View style={styles.contentContainer}>
        {loading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <Text style={styles.buttonLabel}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.colors.darkBlue,
    borderRadius: 16,
    padding: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  contentContainer: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: '800',
    color: theme.colors.white,
  },
});

export default PrimaryButton;
