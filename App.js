import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import SignInScreen from './src/pages/SignInScreen'
import SignUpScreen from './src/pages/SignUpScreen'
import TrackCreateScreen from './src/pages/TrackCreateScreen'
import TrackListScreen from './src/pages/TrackListScreen'
import AccountScreen from './src/pages/AccountScreen'

const Stack = createStackNavigator()

const Tab = createMaterialBottomTabNavigator()

const isLoggedIn = true

function App () {
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator activeColor='white' barStyle={{ backgroundColor: 'grey', height: 50, justifyContent: 'center' }} shifting>
          <Tab.Screen
            name='TrackListScreen'
            component={TrackListScreen}
            options={{ tabBarLabel: 'List', tabBarIcon: 'format-list-bulleted' }}
          />
          <Tab.Screen
            name='TrackCreateScreen'
            component={TrackCreateScreen}
            options={{ tabBarLabel: 'Track', tabBarIcon: 'map-marker-radius' }}
          />
          <Tab.Screen
            name='AccountScreen'
            component={AccountScreen}
            options={{ tabBarLabel: 'Account', tabBarIcon: 'account-box' }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name='SignInScreen'
            component={SignInScreen}
          />
          <Stack.Screen
            name='SignUpScreen'
            component={SignUpScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default App
