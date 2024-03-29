import { useEffect, useState } from 'react';
import { useTheme } from 'native-base';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import OneSignal, { NotificationReceivedEvent, OSNotification } from 'react-native-onesignal';
import * as Linking from 'expo-linking'

import { AppRoutes } from './app.routes';
import { Notification } from '../components/Notification';

const linking = {
  prefixes: ['igniteshoesapp://','com.rocketseat.igniteshoes://'],
  config: {
    screens: {
      details: {
        path: 'details/:productId',
        parse: {
          productId: (productId: string) => productId
        }
      }
    }
  }
}

export function Routes() {
  const [notification, setNotification] =  useState<OSNotification>();

  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  const deeplinking = Linking.createURL('details', {
    queryParams: {
      //producutId: '7'
    }
  });

  console.log(deeplinking)

  useEffect(() => {
    const unsubscribe = OneSignal
    .setNotificationWillShowInForegroundHandler((notificationRecivedEvent: NotificationReceivedEvent) => {
      const response = notificationRecivedEvent.getNotification();

      setNotification(response);
    })

    return () => unsubscribe;

  },[])

  return (
     <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />
      {
        notification?.title &&
        <Notification 
          data={notification} 
          onClose={() => setNotification(undefined)} 
        />
      }
    </NavigationContainer>
  );
}