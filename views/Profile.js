import React, {useContext, useEffect, useState} from 'react';
import {Text, Button, Image} from 'react-native';
import {MainContext} from '../context/MainContext';
import {useTag} from '../hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {uploadsUrl} from '../utils/variables';
import {Card, Icon} from '@rneui/themed';
import {ListItem} from '@rneui/base';

const Profile = () => {
  const {getFilesByTag} = useTag();
  const {setIsLoggedIn, user, setUser} = useContext(MainContext);
  const [avatar, setAvatar] = useState('');

  const loadAvatar = async () => {
    try {
      const avatarArray = await getFilesByTag('avatar_' + user.user_id);
      setAvatar(avatarArray.pop().filename);
    } catch (error) {
      console.error('user avatar fetch failed', error.message);
    }
  };

  useEffect(() => {
    loadAvatar();
  }, []);

  return (
    <Card>
      <Card.Title>Username: {user.username}</Card.Title>
      <Card.Image source={{uri: uploadsUrl + avatar}}></Card.Image>
      <ListItem>
        <Icon name='email'></Icon>
        <ListItem.Title>Email: {user.email}</ListItem.Title>
      </ListItem>
      <ListItem>
        <Icon name='badge'></Icon>
        <ListItem.Title>Full name: {user.full_name}</ListItem.Title>
      </ListItem>
      <Button
        title="Logout!"
        onPress={async () => {
          console.log('Logging out!');
          setUser({});
          setIsLoggedIn(false);
          try {
            await AsyncStorage.clear();
          } catch (error) {
            console.error('clearing asyncstorage failed', error);
          }
        }}
      />
    </Card>
  );
};

export default Profile;
