import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
} from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../../common/styles/theme';
import { Package } from '../../../common/interfaces';

// Enable LayoutAnimation for Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AnimatedCard: React.FC<{
  pkg: Package;
  expanded: boolean;
  onToggleExpand: () => void;
}> = ({ pkg, expanded, onToggleExpand }) => {
  useEffect(() => {
    // Configure the layout animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [expanded]);

  return (
    <View style={styles.animatedCardContainer}>
      <View
        style={[
          styles.packageCard,
          { width: expanded ? '70%' : '100%' },
        ]}
      >
        <Card.Content>
          <View style={styles.packageInfo}>
            <Text style={styles.packageText}>{`Package Size: ${pkg.type}`}</Text>
            <Text style={styles.packageText}>{`Carrier: ${pkg.carrier}`}</Text>
            <TouchableOpacity onPress={onToggleExpand} style={styles.editIcon}>
              <Icon name="edit" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        </Card.Content>
      </View>
      {expanded && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  animatedCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  packageCard: {
    backgroundColor: theme.colors.surface,
    padding: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  packageInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  packageText: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.text,
  },
  editIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1, // Ensure the edit button is on top
  },
  optionsContainer: {
    flexDirection: 'column',
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    backgroundColor: theme.colors.surface,
    // position: 'absolute',
    // right: 10, // Adjust position to the right
    // top: 8,
  },
  optionButton: {
    padding: 8,
    marginVertical: 4,
  },
  optionButtonText: {
    color: theme.colors.primary,
  },
});

export default AnimatedCard;
