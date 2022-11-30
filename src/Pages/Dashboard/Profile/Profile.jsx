import React, { useContext } from 'react';
import { authContext } from '../../../Context/AuthProvider';

const Profile = () => {
    const {user} = useContext(authContext)
    return (
        <div className=''>
            <h3 className='font-bold py-6'>Personal Info</h3>
            <h1>{user?.displayName}</h1>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default Profile;