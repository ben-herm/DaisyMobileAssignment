// src/screens/DetailScreen.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Notification, Package} from '../../common/interfaces';
import {fetchPackages} from '../../services/api/PackagesApi';
import {sendNotifications} from '../../services/api/NotificationsApi';

type DetailScreenRouteProp = RouteProp<{Detail: {email: string}}, 'Detail'>;

const UserDetails: React.FC = () => {
  const [userPackages, setUserPackages] = useState<Package[]>([]);
  const route = useRoute<DetailScreenRouteProp>();
  const {email} = route.params;

  useEffect(() => {
    const getUserPackages = async () => {
      const packagesData = await fetchPackages();
      const userPackages = packagesData.filter(
        pkg => pkg.recipient.email === email,
      );
      setUserPackages(userPackages);
    };
    getUserPackages();
  }, [email]);

  const notifyUser = async () => {
    const notifications: Notification[] = userPackages.map(pkg => ({
      email: pkg.recipient.email,
      content: `You have a ${pkg.type} package from ${pkg.carrier} waiting for you.`,
    }));
    const response = await sendNotifications(notifications);
  };

  return (
    <View>
      <Text>{email}</Text>
      {userPackages.map(pkg => (
        <View key={pkg.id}>
          <Text>
            {pkg.type} - {pkg.carrier}
          </Text>
        </View>
      ))}
      <Button title="Notify User" onPress={notifyUser} />
    </View>
  );
};

export default UserDetails;
