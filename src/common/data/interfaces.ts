export interface Package {
  id: string;
  type: string;
  carrier: string;
  recipient: User;
}

export interface Notification {
  email: string;
  content: string;
}

export interface User {
  email: string;
  name: string;
  packages: Package[]
}

export type NotificationModalProps = {
  content: string;
  visible: boolean;
  onClose: () => void;
};

export type PrimaryButtonProps = {
  onPress: () => void;
  loading: boolean;
  disabled: boolean;
  text: string;
};
