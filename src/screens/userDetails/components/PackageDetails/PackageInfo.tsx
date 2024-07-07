import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import theme from '../../../../common/styles/theme';
import {Package} from '../../../../common/data/interfaces';

const PackageInfo: React.FC<{pkg: Package}> = ({pkg}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.packageInfo}>
      <Text
        style={
          styles.packageText
        }>{`${t('userDetails.packageSize')} ${pkg.type}`}</Text>
      <Text
        style={
          styles.packageText
        }>{`${t('userDetails.carrier')} ${pkg.carrier}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  packageInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  packageText: {
    fontSize: theme.typography.fontSizes.medium,
    color: theme.colors.text,
  },
});

export default PackageInfo;
