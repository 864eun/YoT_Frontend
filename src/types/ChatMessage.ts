export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  content: string;
  timestamp: number;
  status: 'pending' | 'success' | 'error';
}
