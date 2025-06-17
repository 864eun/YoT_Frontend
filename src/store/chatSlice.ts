import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage } from '../types/ChatMessage';

interface ChatState {
  messages: ChatMessage[];
}

const initialState: ChatState = {
  messages: [
    {
      id: 'init-msg-1',
      sender: 'bot',
      content: '요가 자세 추천을 해드릴까요?',
      timestamp: Date.now(),
      status: 'success',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload);
    },
    updateMessageStatus(
      state,
      action: PayloadAction<{ id: string; status: ChatMessage['status'] }>,
    ) {
      const msg = state.messages.find(m => m.id === action.payload.id);
      if (msg) {
        msg.status = action.payload.status;
      }
    },
    clearMessages(state) {
      state.messages = [];
    },
    resetMessages(state) {
      state.messages = [initialState.messages[0]];
    },
  },
});

export const { addMessage, updateMessageStatus, clearMessages, resetMessages } =
  chatSlice.actions;
export default chatSlice.reducer;
