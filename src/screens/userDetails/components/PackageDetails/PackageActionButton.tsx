import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../../../common/styles/theme';
import {PackageactionButtonProps} from '../../interfaces';
import LoadingIndicator from '../../../../common/components/indicators/LoadingIndicator';

const PackageActionButton: React.FC<PackageactionButtonProps> = ({
  text,
  onPress,
  disabled,
}) => {
  return disabled ? (
    <LoadingIndicator size="small" />
  ) : (
    <TouchableOpacity style={styles.optionButton} onPress={onPress}>
      <Text style={styles.optionButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButtonText: {
    color: theme.colors.primary,
  },
});

export default PackageActionButton;
