import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native'
import * as Api from '../utils/api.js'
import { connect } from 'react-redux';
import * as Color from '../utils/colors'

class DeckList extends React.Component {

  render() {
    const { decks } = this.props
    // console.log(this.props.navigation);
    // console.log("decks", decks)
    return (
      <View style={styles.container}>
      {decks !== null ?
        decks.map((deck) => (
          <TouchableOpacity
            key={deck.title}
            style={styles.button}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('DeckDetails', deck);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 25}}>{deck.title}</Text>
            <Text>{deck.questions.length} cards</Text>
          </TouchableOpacity>
        ))
        :
        null
      }
      </View>
    );
  }
}

function mapStateToProps(decks, props) {
  let newDeckList = [];

  if (decks !== null && decks !== undefined) {
    Object.keys(decks).forEach((key) => {
      newDeckList.push(decks[key]);
    });

    return {
      decks: newDeckList
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grey,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    padding: 5,
    justifyContent: 'flex-start',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  }
});

export default connect(mapStateToProps)(DeckList)
