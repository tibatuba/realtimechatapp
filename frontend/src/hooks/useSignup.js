import { toast } from 'react-toastify';
import { useState } from 'react';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (signupData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Handle successful signup (e.g., redirecting or storing user data)
      return data;

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
