import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity, TextInput } from 'react-native'
import * as Api from '../utils/api.js'
import { connect } from 'react-redux';
import * as Color from '../utils/colors'
import { addCard } from '../actions'

class AddCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formQuestion: '',
      formAnswer: ''
    }
  }

  static navigationOptions = {
    title: 'Add Card'
  }

  render() {
    // const { decks } = this.props
    console.log("AddCard props", this.props);
    // console.log("decks", decks)
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Question</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here the question!"
          onChangeText={(text) => this.setState({formQuestion: text})}
        />
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Answer</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here the answer!"
          onChangeText={(text) => this.setState({formAnswer: text})}
        />
        <View style={{paddingTop: 30}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              var newCard = {
                title: this.props.navigation.state.params.title,
                question:this.state.formQuestion,
                answer: this.state.formAnswer
              }
              this.props.dispatch(addCard(newCard))
              // this.props.addCard(newCard)
              this.props.navigation.navigate('Home');
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// function mapDispatchToProps(dispatch, props) {
//   // console.log("mapDispatchToProps", props);
//   return {
//     addCard: (card) => dispatch(AddCard(card)),
//   }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grey,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  inputField: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'flex-start',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5
  }
});

export default connect()(AddCard)
