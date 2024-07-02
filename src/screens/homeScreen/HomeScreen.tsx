// src/screens/HomeScreen.tsx
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/interfaces';
import {useFetchPackages} from './hooks/useFetchPackages';
import {routes} from '../../navigation/constants';

//test
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {packages, loading, error} = useFetchPackages();

  const handlePress = (recipientEmail: string) => {
    navigation.navigate(routes.Details, {email: recipientEmail});
  };

  return (
    <View>
      <FlatList
        data={packages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item.recipient.email)}>
            <Text>{item.recipient.name}</Text>
            <Text>{item.recipient.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
