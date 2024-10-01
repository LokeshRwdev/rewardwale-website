import api from './api';

// Send OTP API call
export const sendOtp = async (body: Record<string, any>) => {
  try {
    const response = await api.put('/login', body);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to send OTP');
  }
};

// Verify OTP API call
export const verifyOtp = async (phoneNumber: string, otp: string) => {
  try {
    const response = await api.put('/api/v2/verifyOTP', { phoneNumber, otp });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to verify OTP');
  }
};
