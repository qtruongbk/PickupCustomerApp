import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import ConfigHeader from '../components/HeaderTitle';
import { IconProfile, IconSearch, IconSupport, IconText } from '../components/Icon';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Login" component={TabOneScreen} options={{ headerShown: false, }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        tabBarActiveTintColor: '#8FC045',
      }}
     >
      <BottomTab.Screen
        name="TabOne"
        component={NotFoundScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: "New Job",
          tabBarIcon: ({ color }) => <IconSearch color={color} />,
          headerStyle: {
            height: 110,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0
            },
          },
          // headerTitleContainerStyle: {
          //   top: 0,
          //   left: 0
          // },
          headerTitle: () => <ConfigHeader title="New Job" />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Jobs",
          tabBarIcon: ({ color }) => <IconText color={color} />,
          headerStyle: {
            height: 110,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0
            },
            marginHorizontal: undefined
          },
          headerTitleContainerStyle: {
            top: undefined,
            left: undefined,
            marginHorizontal: undefined
          },
          headerTitle: () => <ConfigHeader title="My Activity" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={NotFoundScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <IconProfile color={color} />,
          headerStyle: {
            height: 110,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0
            },
          },
          headerTitle: () => <ConfigHeader title="Profile" />,
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={NotFoundScreen}
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => <IconSupport color={color} />,
          headerStyle: {
            height: 110,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0
            },
          },
          headerTitle: () => <ConfigHeader title="Support" />,
        }}
      />
    </BottomTab.Navigator >
  );
}