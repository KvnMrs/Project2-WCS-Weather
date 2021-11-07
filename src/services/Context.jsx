import React, {
  useContext, useState, useEffect, createContext,
} from 'react';
import supabase from './supabaseClient';

// Create context for Auth
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Create state values for user data and loading
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get session's data if there is an active session
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, sessionAuth) => {
        setUser(sessionAuth?.user ?? null);
        setLoading(false);
      },
    );

    // Clean the useEffect
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Create Signup, Signin, Signout functions
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  // Use a Provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
