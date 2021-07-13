
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookList from './src/Views/Library/BookList';
import BookDetail from './src/Views/Library/BookDetail';
import AddBook from './src/Views/AddBook/AddBook';

const LibraryStack=createStackNavigator();

const Tab =createBottomTabNavigator();

function LibraryStackScreen(){
  return(
      <LibraryStack.Navigator>
        <LibraryStack.Screen name="BookList" component={BookList} options={{title:'Library',  headerStyle:{backgroundColor:'#F6BABA', }, headerTitleStyle: {fontSize: 26, fontWeight:'bold', textAlign:'center'}, shadowColor: "black"}}/>
        <LibraryStack.Screen name="AddBook" component={AddBook}/> 
      </LibraryStack.Navigator>
  );
}

const App= () => (

  <NavigationContainer>
    
    <Tab.Navigator>
      <Tab.Screen name="Mis libros" component={LibraryStackScreen} />
      <Tab.Screen name="Añadir libros" component={AddBook} />
      <Tab.Screen name="Mi perfil" component={BookDetail}/>
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
