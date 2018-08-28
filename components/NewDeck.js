import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity, TextInput } from 'react-native'
import * as Api from '../utils/api.js'
import { connect } from 'react-redux';
import * as Color from '../utils/colors'
import { addDeck } from '../actions'

class NewDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formDeckTitle: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>What is the name of your new deck?</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Deck Title"
          onChangeText={(text) => this.setState({formDeckTitle: text})}
        />
        <View style={{paddingTop: 30}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              var newDeck = {
                title: this.state.formDeckTitle,
                questions: []
              }
              this.props.dispatch(addDeck(newDeck))
              this.props.navigation.navigate('DeckDetails', newDeck);
              this.setState({formDeckTitle: ''})
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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

export default connect()(NewDeck)
