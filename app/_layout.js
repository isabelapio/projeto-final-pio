import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="deftones"
        options={{
          title: 'Deftones',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="music" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="historia"
        options={{
          title: 'História',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
