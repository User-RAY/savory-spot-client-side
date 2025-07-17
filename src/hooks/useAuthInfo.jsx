import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuthInfo = () => {

    const {user} = useContext(AuthContext);

    
    return user;
};

export default useAuthInfo;