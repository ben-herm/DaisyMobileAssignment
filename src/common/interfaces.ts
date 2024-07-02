export interface Package {
  id: string;
  type: string;
  carrier: string;
  recipient: {
    name: string;
    email: string;
  };
}

export interface Notification {
  email: string;
  content: string;
}
