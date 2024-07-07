import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {MainHeaderProps} from './interfaces';
import theme from '../../styles/theme';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const MainHeader: React.FC<MainHeaderProps> = ({title, showBackButton}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const headerHeight =
    Platform.OS === 'ios' && insets.top > 0 ? 60 + insets.top : 60;

  return (
    <SafeAreaView style={[styles.safeArea, {height: headerHeight}]}>
      <View style={styles.headerContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-thin-left"
              size={24}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        )}
        <Text
          style={[styles.headerTitle, {marginLeft: showBackButton ? 40 : 0}]}>
          {title}
        </Text>
        <TouchableOpacity>
          <Icon
            name="dots-three-vertical"
            size={24}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.darkBlue,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.darkBlue,
    flex: 1,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});

export default MainHeader;
