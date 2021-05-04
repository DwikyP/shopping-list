import React, {createContext, useState} from 'react';
import {Alert,} from 'react-native'
import auth from '@react-native-firebase/auth';
	
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
 
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        showLoading,
        login: async (email, password) => {
            setShowLoading(true);
          try {
            await auth().signInWithEmailAndPassword(email, password);
            setShowLoading(false);
          } catch (e) {
            console.log(e);
            Alert.alert(
                e.message
            );
            setShowLoading(false);
          }
        },
        register: async (email, password) => {
            setShowLoading(true);
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            setShowLoading(false);
          } catch (e) {
            console.log(e);
            Alert.alert(
                e.message
            );
            setShowLoading(false);
          }
        },
        logout: async () => {
            setShowLoading(true);
          try {
            await auth().signOut();
            setShowLoading(false);
          } catch (e) {
            console.log(e);
            setShowLoading(false);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};