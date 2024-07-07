import React, {useRef, useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import theme from '../../../../common/styles/theme';
import {Package} from '../../../../common/data/interfaces';
import PackageInfo from './PackageInfo';
import ToggleArrow from './ToggleArrow';
import PackageActionButton from './PackageActionButton';
import {useTranslation} from 'react-i18next';

const AnimatedPackageCard: React.FC<{
  pkg: Package;
  notifySingleUser: any;
  email: string;
}> = ({pkg, notifySingleUser, email}) => {
  const {t} = useTranslation();
  const pan = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Animated.spring(pan, {
      toValue: isOpen ? -150 : 0,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const toggleCard = () => setIsOpen(prev => !prev);

  const handleNotify = async () => {
    await notifySingleUser(pkg, email, setLoading, setError);
    console.log('Notification sent for package:', pkg);
  };

  const borderRadius = pan.interpolate({
    inputRange: [-150, 0],
    outputRange: [0, 8],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.animatedCardContainer}>
      <Animated.View
        style={[
          styles.packageCard,
          {
            transform: [{translateX: pan}],
            borderRadius: borderRadius,
          },
        ]}>
        <Card.Content>
          <PackageInfo pkg={pkg} />
        </Card.Content>
        <ToggleArrow isOpen={isOpen} onPress={toggleCard} />
      </Animated.View>
      <Animated.View
        style={[
          styles.optionsContainer,
          {
            opacity: pan.interpolate({
              inputRange: [-150, 0],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        {error && (
          <Text style={styles.errorText} onPress={() => setError(null)}>
            {error}
          </Text>
        )}
        <PackageActionButton
          text={t('userDetails.notify')}
          onPress={handleNotify}
          disabled={loading}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    position: 'relative',
  },
  packageCard: {
    backgroundColor: theme.colors.white,
    padding: 8,
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
  },
  optionsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    zIndex: -1,
  },
  errorText: {
    color: theme.colors.error,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default AnimatedPackageCard;
