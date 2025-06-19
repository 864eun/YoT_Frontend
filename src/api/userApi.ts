import { User } from '../types/User';

// 백엔드에서 요구하는 필드명에 맞춰 변환 (snake_case)
function toBackendUser(user: User) {
  return {
    id: user.id,
    display_name: user.displayName,
    email: user.email,
    email_verified: user.emailVerified,
    provider_id: user.providerId,
    creation_time: user.creationTime,
  };
}

// src/api/userApi.ts

export const sendUserToBackend = async (idToken: string) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/user/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || '유저 저장 실패');
    }
    return data;
  } catch (error) {
    console.error('백엔드 저장 실패:', error);
    throw error;
  }
};

// export const sendUserToBackend = async (user: User) => {
//   try {
//     const response = await fetch('http://127.0.0.1:8000/user/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(toBackendUser(user)),
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(data.detail || '유저 저장 실패');
//     }
//     return data;
//   } catch (error) {
//     console.error('백엔드 저장 실패:', error);
//     throw error;
//   }
// };
