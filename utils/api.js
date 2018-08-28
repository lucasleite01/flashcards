import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, setDecks } from './_decks'

export async function getDecks() {
  const response = await AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    if (results === null) {
      return setDecks()
    } else {
      return JSON.parse(results)
    }
  })
  return response
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    let data = JSON.parse(results)
    return data[id]
  })
}

export function saveDeckTitle(title) {
  let newDeck = {
    [title]: {
      title: title,
      questions: null
    }
  }
  AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify(newDeck)
  )
}

export function addCardToDeck(title, card) {
  let deltaDeck = getDeck(title)
  let questions = deltaDeck.questions
  if (questions == null) {
    deltaDeck.questions = card
  } else {
    deltaDeck.questions = {
      ...questions,
      card
    }
  }
  AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify(deltaDeck)
  )
}
