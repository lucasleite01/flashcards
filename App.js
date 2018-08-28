import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, Platform } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import * as Api from './utils/api.js'
import * as Color from './utils/colors'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import NewDeck from './components/NewDeck'
import { Constants } from 'expo'
import { setDecks, setLocalNotification } from './utils/_decks'


const Tabs = createMaterialTopTabNavigator(
  {
  'DECKS': { screen: DeckList },
  'NEW DECK': { screen: NewDeck },
  },
  {
    navigationOptions: {
      header: null,
      initialRouteName: 'DECKS'
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? Color.purple : Color.white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? Color.white : Color.purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckDetails: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: Color.white,
      headerStyle: {
        backgroundColor: Color.purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: Color.white,
      headerStyle: {
        backgroundColor: Color.purple
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: Color.white,
      headerStyle: {
        backgroundColor: Color.purple
      }
    }
  }
})

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    const store = createStore(reducer, setDecks(), composeWithDevTools(applyMiddleware(thunk)))
    console.log(store);
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App
