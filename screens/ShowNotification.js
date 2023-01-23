import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS, icons} from '../constants';
import socketIOClient from 'socket.io-client';

const Notifications = ({title, message, date, time}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        paddingHorizontal: 15,
        marginBottom: 12,
        borderWidth: 0.5,
        borderColor: COLORS.lightGray1,
        borderRadius: 5,
        elevation: 2,
      }}>
      <View style={{flex: 0.2}}>
        <ImageBackground
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.red_100,
            borderRadius: 30,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.red_600,
            }}
            source={icons.notification}
          />
        </ImageBackground>
      </View>
      <View style={{flex: 0.8}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: COLORS.darkGray,
            textTransform: 'capitalize',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.blue,
            fontWeight: '400',
          }}>
          {message}
        </Text>
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 10, color: COLORS.darkGray}}>
            {date}
            {',  '}
          </Text>
          <Text style={{fontSize: 10, color: COLORS.darkGray}}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ShowNotification = () => {
  let io = socketIOClient('http://192.168.0.117:8000');
  const [notificationsData, setNotificationsData] = useState();

  React.useEffect(() => {
    io.on('connect', () => {
      console.log('Client-side connected');
    });

    io.on('notification', data => {
      console.log(data);
      setNotificationsData(data);
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#DCDCDC', padding: 16}}>
      {notificationsData ? (
        Notifications({
          title: notificationsData.title,
          message: notificationsData.message,
          date: '17/01/2023',
          time: '01:54 PM',
        })
      ) : (
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 300,
            fontSize: 14,
            color: COLORS.darkGray,
            textTransform: 'uppercase',
          }}>
          No notifications!
        </Text>
      )}
    </View>
  );
};

export default ShowNotification;
