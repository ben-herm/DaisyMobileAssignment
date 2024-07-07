import React, {useRef, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Animated, Modal} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NotificationModalProps} from '../../data/interfaces';
import theme from '../../styles/theme';

const NotificationModal: React.FC<NotificationModalProps> = ({
  visible,
  onClose,
  content
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => slideAnim.setValue(300));
    }
  }, [visible]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={onClose}>
      <Animated.View style={[styles.modalContainer, {opacity: fadeAnim}]}>
        <Animated.View
          style={[styles.modalContent, {transform: [{translateY: slideAnim}]}]}>
          <Icon
            name="check-circle"
            size={64}
            color={theme.colors.scrim}
          />
          <Text style={styles.modalText}>{content}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>OK</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: theme.typography.fontSizes.medium,
    marginVertical: 20,
    color: theme.colors.text,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: theme.colors.darkBlue,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  closeButtonText: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.white,
    textAlign: 'center',
  },
});

export default NotificationModal;
