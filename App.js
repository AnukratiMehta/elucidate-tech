import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserSearch from './UserSearch';
import RepositoryList from './RepositoryList';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={UserSearch}
          options={{ title: 'GitHub User Search', headerTitleStyle: { color: '#783fc2' }, }}
        />
        <Stack.Screen
          name="RepositoryList"
          component={RepositoryList}
          options={{ title: 'Public Repositories', headerTitleStyle: { color: '#783fc2' }, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
