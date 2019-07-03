import React from 'react';
import { useAuth0 } from '../../config/auth0-wrapper';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return 'Loading...';
  }

  return (
    <>
      <img src={user.picture} alt="profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;
