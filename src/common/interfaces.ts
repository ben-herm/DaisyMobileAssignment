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
}
