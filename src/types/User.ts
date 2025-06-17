export interface User {
  uid: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string | null;
  providerId: string;
  creationTime: string;
}
