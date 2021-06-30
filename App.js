
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookList from './src/Views/Library/BookList';
import BookDetail from './src/Views/Library/BookDetail';

const LibraryStack=createStackNavigator();

const Tab =createBottomTabNavigator();

function LibraryStackScreen(){
  return(
      <LibraryStack.Navigator>
        <LibraryStack.Screen name="BookList" component={BookList} options={{title:'Library',  headerStyle:{backgroundColor:'#F6BABA', }, headerTitleStyle: {fontSize: 26, fontWeight:'bold', textAlign:'center'}, shadowColor: "black"}}/>
        <LibraryStack.Screen name="BookDetail" component={BookDetail}/> 
      </LibraryStack.Navigator>
  );
}

const App= () => (

  <NavigationContainer>
    
    <Tab.Navigator>
      <Tab.Screen name="LibraryTab" component={LibraryStackScreen} />
      <Tab.Screen name="AddbookTab" component={BookDetail}/>
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
