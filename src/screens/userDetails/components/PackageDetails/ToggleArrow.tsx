import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import theme from '../../../../common/styles/theme';
import {ToggleArrowButtonProps} from '../../interfaces';

const ToggleArrow: React.FC<ToggleArrowButtonProps> = ({isOpen, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.arrowContainer}>
      <Icon
        name={isOpen ? 'chevron-thin-right' : 'chevron-thin-left'}
        size={16}
        color={theme.colors.black}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrowContainer: {
    position: 'absolute',
    top: '60%',
    right: 4,
    transform: [{translateY: -12}],
    borderRadius: 8,
    padding: 4,
  },
});

export default ToggleArrow;
