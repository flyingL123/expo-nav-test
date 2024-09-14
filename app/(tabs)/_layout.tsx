import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
const Tab = createMaterialBottomTabNavigator();
import TabOne from './index';
import TabTwo from './two';
import TabThree from './three/index';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     // Disable the static render of the header on web
    //     // to prevent a hydration error in React Navigation v6.
    //     headerShown: useClientOnlyValue(false, true),
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Tab One',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //       headerRight: () => (
    //         <Link href="/modal" asChild>
    //           <Pressable>
    //             {({ pressed }) => (
    //               <FontAwesome
    //                 name="info-circle"
    //                 size={25}
    //                 color={Colors[colorScheme ?? 'light'].text}
    //                 style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
    //               />
    //             )}
    //           </Pressable>
    //         </Link>
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="two"
    //     options={{
    //       title: 'Tab Two',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
      
    //   <Tabs.Screen
    //     name="three"
    //     options={{
    //       title: 'Tab Three',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    // </Tabs>

    // Uncomment the tabs above, and comment the Tabs below, and the stack in tab 3 will work as expected.
    <Tab.Navigator>
      <Tab.Screen
        name="index"
        component={TabOne}
        options={{
          tabBarIcon: 'home'
        }}
      />
      <Tab.Screen
        name="two"
        component={TabTwo}
        options={{
          tabBarIcon: 'pound'
        }}
      />
      <Tab.Screen
        name="three"
        component={TabThree}
        options={{
          tabBarIcon: 'magnify'
        }}
      />
    </Tab.Navigator>
  );
}
