import OneSignal from 'react-native-onesignal';

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Diego',
    'user_email': 'diegoferreira1964@gmail.com'
  });
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.sendTag('cart_items_count', itemsCount)
}