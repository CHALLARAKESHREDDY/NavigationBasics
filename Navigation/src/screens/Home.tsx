

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

//const HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>;


import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home() {

  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default Home

// ... other code from the previous secti