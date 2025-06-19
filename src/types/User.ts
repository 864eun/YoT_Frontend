export interface User {
  id: string;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  providerId: string | null;
  creationTime: string | null;
}
