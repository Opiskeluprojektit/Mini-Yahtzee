// Laura Vikström, TIK21KM

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },

    header: {
      marginTop: 50,
      backgroundColor: '#98e698',
      flexDirection: 'row',
      borderBottomWidth: 1, 
      borderTopWidth: 1,
      borderColor: "#1e7b1e",
    },

    title: {
      color: '#000',
      flex: 1,
      fontSize: 30,
      textAlign: 'center',
      margin: 12,
      letterSpacing: 2,
      fontFamily: 'GemunuLibreLight'
    },

    gameboard: {
      alignContent: 'center',
      flex: 1,
    },

    row: {
      flexDirection: 'row', 
      marginTop: 25,
      marginBottom: 20,
    }, 

    text: {
      fontSize: 18,
      color: '#000',
      marginBottom: 16,
      textAlign: 'center',
      fontFamily: 'GemunuLibreLight'
    },

    textTotal: {
      fontSize: 18,
      color: '#000',
      marginBottom: 15,
      textAlign: 'center',
      fontFamily: 'GemunuLibreLight'
    },
    
    diceSize: 60,
    spotSize: 30,

    bonus: {
      fontSize: 15,
      color: '#000',
      marginBottom: 20,
      textAlign: 'center',
      fontFamily: 'GemunuLibreLight'
    },

    button: {
      margin: 30,
      padding: 10,
      backgroundColor: "#98e698",
      width: 150,
      borderRadius: 10,
      borderWidth: 1, 
      borderBottomWidth: 1,
      borderColor: "#1e7b1e",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    buttonText: {
      color: '#000',
      fontSize: 19,
      fontFamily: 'GemunuLibreLight',
      letterSpacing: 0.75
    },

    column: {
      alignItems: 'center',
    },

    footer: {
      backgroundColor: '#98e698',
      flexDirection: 'row',
      borderBottomWidth: 1, 
      borderTopWidth: 1,
      borderColor: "#1e7b1e",
    },

    author: {
      color: '#000',
      flex: 1,
      fontSize: 17,
      textAlign: 'center',
      margin: 12,
      letterSpacing: 0.75,
      fontFamily: 'GemunuLibreLight'
    },

  });