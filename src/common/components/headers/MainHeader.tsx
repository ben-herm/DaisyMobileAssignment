import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {MainHeaderProps} from './interfaces';
import theme from '../../styles/theme';

const MainHeader: React.FC<MainHeaderProps> = ({title, showBackButton}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="chevron-thin-left" size={24} color={theme.colors.white} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <Icon name="dots-three-vertical" size={24} color={theme.colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: theme.colors.darkBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 10,
  },
});

export default MainHeader;
