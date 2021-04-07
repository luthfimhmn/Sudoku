import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f5DD42',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: 2,
    height: 50,
    width: Dimensions.get("window").width - 70
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 40
  },
  textMini: {
    fontSize: 20
  },
  buttonContainer: {
    marginTop: 70
  },
  button: {
    borderRadius: 30,
    marginTop: 10
  },
  textLarge : {
    fontSize: 30
  },
  row: {
    flexDirection: 'row'
  },
  boxBegin: {
    width: (Dimensions.get("window").width - 50)/9,
    height: (Dimensions.get("window").width - 50)/9,
    borderColor: "black",
    backgroundColor: "#0DF4C5",
    color: "black",
    borderWidth: 1,
    borderRadius: 10
  },
  box: {
    width: (Dimensions.get("window").width - 50)/9,
    height: (Dimensions.get("window").width - 50)/9,
    borderColor: "black",
    color: "black",
    backgroundColor: "aqua",
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: 'bold'
  }
})

export default Styles;