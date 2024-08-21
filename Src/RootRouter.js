import React from 'react';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Root Router Modules
import PostsScreen from './Screens/Posts/PostsScreen';
import DetailsScreen from './Screens/Details/DetailsScreen';



const AppRoot = createStackNavigator();

const RootRouter = () => {

  return (
    <AppRoot.Navigator
      initialRouteName={'PostsScreen'}
      screenOptions={{ gestureEnabled: false }}>

      <AppRoot.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
       <AppRoot.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    
    


    </AppRoot.Navigator>
  );
};

export default RootRouter;
