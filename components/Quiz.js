import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, Platform, TouchableOpacity } from 'react-native'
import * as Color from '../utils/colors'

class Quiz extends React.Component {
  state = {
    showAnswer: false,
    showHits: false,
    cardNumber: 0,
    totalQuestions: 0,
    hits: 0,
    hitPercentage: 0
  }

  componentDidMount() {
    this.setState({
      totalQuestions: this.props.navigation.state.params.length,
    })
  }

  static navigationOptions = {
    title: 'Quiz'
  }

  render() {
    const { navigation } = this.props
    const { showAnswer, showHits, cardNumber, totalQuestions, hits, percentage } = this.state
    return (
      <View style={styles.container}>
        {!showAnswer && !showHits ?
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{cardNumber+1}/{totalQuestions}</Text>
            <View style={{paddingTop: 30}}>
              <Text style={{fontWeight: 'bold', fontSize: 30}}>{navigation.state.params[cardNumber].question}</Text>
            </View>
            <View style={{paddingTop: 30}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({
                    showAnswer: true
                  })
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: Color.red}}>Show Answer</Text>
              </TouchableOpacity>
            </View>
          </View>
          : !showHits ?
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{cardNumber+1}/{totalQuestions}</Text>
            <View style={{paddingTop: 30}}>
              <Text style={{fontSize: 20}}>{navigation.state.params[cardNumber].answer}</Text>
            </View>
            <View style={{paddingTop: 30}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({
                    showAnswer: false
                  })
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: Color.red}}>Question</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingTop: 30}}>
              <TouchableOpacity
                style={styles.buttonQuiz}
                onPress={() => {
                  this.setState({
                    showAnswer: true
                  })
                  if (cardNumber + 1 === navigation.state.params.length) {
                    this.setState({
                      showAnswer: false,
                      showHits: true,
                      cardNumber: 0,
                      hits: hits + 1,
                      hitPercentage: ((this.state.hits+1)/this.state.totalQuestions)*100
                    })
                  } else {
                    this.setState({
                      showAnswer: false,
                      cardNumber: cardNumber + 1,
                      hits: hits + 1,
                      hitPercentage: ((this.state.hits+1)/this.state.totalQuestions)*100
                    })
                  }
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: Color.green}}>Correct</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingTop: 30}}>
              <TouchableOpacity
                style={styles.buttonQuiz}
                onPress={() => {
                  this.setState({
                    showAnswer: true
                  })
                  if (cardNumber + 1 === navigation.state.params.length) {
                    this.setState({
                      showAnswer: false,
                      showHits: true,
                      cardNumber: 0,
                    })
                  } else {
                    this.setState({
                      showAnswer: false,
                      cardNumber: cardNumber + 1,
                    })
                  }
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: Color.red}}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 35, color: Color.blue}}>HIT PERCENTAGE</Text>
            <Text style={{fontWeight: 'bold', fontSize: 35, color: Color.blue}}>{this.state.hitPercentage.toFixed(2)}%</Text>
            <View style={{paddingTop: 30}}>
              <TouchableOpacity
                style={styles.buttonQuiz}
                onPress={() => {
                  this.props.navigation.navigate('DeckDetails');
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: Color.blue}}>Back to Deck</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingTop: 30}}>
              <TouchableOpacity
                style={styles.buttonQuiz}
                onPress={() => {
                  this.setState({
                    showAnswer: false,
                    showHits: false,
                    cardNumber: 0,
                    hits: 0,
                    hitPercentage: 0
                  })
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: Color.blue}}>Restart Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
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
  },
  buttonQuiz: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'flex-start',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5
  }
});

export default Quiz
