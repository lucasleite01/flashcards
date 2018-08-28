import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, Platform, TouchableOpacity, Animated } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../utils/_decks'

class Deck extends React.Component {
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1500 }).start()
  }

  static navigationOptions = ({navigation}) => {
    return {title: navigation.state.params.title}
  }

  render() {
    const { opacity } = this.state
    const { navigation } = this.props
    return (
      <Animated.View style={styles.container, {opacity}}>
        <View style={{paddingTop: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>{navigation.state.params.title}</Text>
          <Text>{navigation.state.params.questions.length} cards</Text>
        </View>
        <View style={{paddingTop: 30}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('AddCard', navigation.state.params);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>Add card</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 30}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              clearLocalNotification()
              setLocalNotification()
              if (navigation.state.params.questions.length !== 0)
                this.props.navigation.navigate('Quiz', navigation.state.params.questions);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'flex-start',
    borderStyle: 'solid',
    borderWidth: 1,
  }
});

export default Deck
