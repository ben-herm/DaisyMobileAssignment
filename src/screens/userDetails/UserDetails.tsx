import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Card, Text, ActivityIndicator} from 'react-native-paper';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Notification, Package} from '../../common/interfaces';
import {sendNotifications} from '../../services/api/NotificationsApi';
import theme from '../../common/styles/theme';

type DetailScreenRouteProp = RouteProp<
  {Detail: {email: string; packages: Package[]}},
  'Detail'
>;

const UserDetails: React.FC = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const {email, packages: userPackages} = route.params;

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const notifyUser = async () => {
    setLoading(true);
    const notifications: Notification[] = userPackages.map(pkg => ({
      email: pkg.recipient.email,
      content: `You have a ${pkg.type} package from ${pkg.carrier} waiting for you.`,
    }));
    await sendNotifications(notifications);
    setLoading(false);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="User Details" />
        <Card.Content>
          <Text style={styles.email}>{email}</Text>
        </Card.Content>
      </Card>
      {userPackages.map(pkg => (
        <Card key={pkg.id} style={styles.packageCard}>
          <Card.Content>
            <Text
              style={styles.packageText}>{`Package Size: ${pkg.type}`}</Text>
            <Text style={styles.packageText}>{`Carrier: ${pkg.carrier}`}</Text>
          </Card.Content>
        </Card>
      ))}
      <TouchableOpacity
        onPress={notifyUser}
        style={styles.button}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator animating={true} color={theme.colors.surface} />
        ) : (
          <Text style={styles.buttonLabel}>Notify User</Text>
        )}
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>User notified successfully!</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  card: {
    marginBottom: 16,
    backgroundColor: theme.colors.surface,
  },
  email: {
    fontSize: theme.typography.fontSizes.large,
    color: theme.colors.text,
  },
  packageCard: {
    marginVertical: 4,
    backgroundColor: theme.colors.surface,
    padding: 8,
    borderRadius: 8,
  },
  packageText: {
    fontSize: theme.typography.fontSizes.medium,
    alignSelf: 'center',
    color: theme.colors.text,
  },
  button: {
    marginTop: 16,
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    padding: 8,
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center'
  },
  buttonLabel: {
    fontSize: theme.typography.fontSizes.medium,
    fontWeight: '800',
    alignSelf:'center',
    color:theme.colors.surface
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: theme.typography.fontSizes.medium,
    marginBottom: 20,
    color: theme.colors.text,
  },
});

export default UserDetails;
