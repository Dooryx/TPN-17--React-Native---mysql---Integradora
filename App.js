import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, StyleSheet, Text  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CreateScreen from './screens/CreateScreen';
import ReadScreen from './screens/ReadScreen';
import UpdateScreen from './screens/UpdateScreen';
import DeleteScreen from './screens/DeleteScreen';

const Tab = createBottomTabNavigator();



const HomeScreen = ({ navigation }) => {
  const buttonsData = [
    { title: 'Create', screen: 'Create', icon: 'plus' },
    { title: 'Read', screen: 'Read', icon: 'list' },
    { title: 'Update', screen: 'Update', icon: 'pencil' },
    { title: 'Delete', screen: 'Delete', icon: 'trash' },
  ];


  const renderButton = ({ title, screen, icon }) => (
    <TouchableOpacity key={title} style={styles.viewbutton} onPress={() => navigation.navigate(screen)}>
      <View style={{ alignItems: 'center' }}>
        <Icon name={icon} size={30} color="#83AF9E" />
        <Text style={{ color: '#83AF9E' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {buttonsData.slice(0, 2).map((button) => renderButton(button))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {buttonsData.slice(2).map((button) => renderButton(button))}
      </View>
    </View>
  );
};

const ip = '192.168.100.228'; // cambiar la ip si se conecta a otra red

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus" color={color} size={size} />
            ),
          }}
        >
          {(props) => <CreateScreen {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Read"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        >
          {(props) => <ReadScreen {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Update"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="pencil" color={color} size={size} />
            ),
          }}
        >
          {(props) => <UpdateScreen {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Delete"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="trash" color={color} size={size} />
            ),
          }}
        >
          {(props) => <DeleteScreen {...props} ip={ip} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  container: {
    padding: 16,
    backgroundColor: '#070A09E5',
  },
  input: {
    color: 'white',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  viewbutton: {
    flex: 1,
    margin: 5,
  },
});

export default App;
