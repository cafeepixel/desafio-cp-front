import React, { createContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
// import { Container, Spinner } from '../components/Spinner/styles';
import * as auth from '@/services/auth';

interface User {
    name?:string;
    email:string;
    password?: string;
  }

interface AuthContextData {
    signed: boolean;
    loading: boolean;
    user: User;
    message: string;
    signIn(user:User): Promise<any>;
    signOut(): void;
    addMessage(message:string):void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState('')


    useEffect(() => {
      const storagedUser = localStorage.getItem('@App:user');
      const storagedToken = localStorage.getItem('@App:token');
  
      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }, []);

    async function signIn(user: User) {
        try {
        setLoading(true)
        const response = await auth.signIn({email: user.email, password: user.password});
        localStorage.setItem('@App:user', JSON.stringify(response.user));
        localStorage.setItem('@App:token', response.token);
        setUser(response.user)
        setLoading(false)
        return <Redirect to='/app'  />
        } catch (error) {
          console.log(error);
          addMessage(error)
          setLoading(false)
          return <Redirect to='/'  />
        }
        
        
    }

    function signOut() {
      setUser(null);
  
      localStorage.clear()
    }


    function addMessage(message:string) {
      setMessage(message)
    }
    return (
      <AuthContext.Provider value={{ signed: !!user, loading, user, message, signIn, signOut, addMessage }}>
        {children}
      </AuthContext.Provider>
    );
   };

export default AuthContext;