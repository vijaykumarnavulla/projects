import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
  },
  scontainer: {
    width: '90%',
    height: '60%',
    margin:'auto',
    marginLeft:'5%',
    marginRight:'5%',
    backgroundColor: '#cea1a1',
    justifyContent: 'space-between',
    // borderWidth: 5,       // Border width of 5 units
    // borderRadius: 10,  
  },
  header: {
    padding: 10,
    backgroundColor: 'grey',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-start'
    // borderColor: '#333',  // Dark grey border
    // borderWidth: 5,       // Border width of 5 units
    // borderRadius: 10,   
  },
  disableView: {
    backgroundColor: '#00000014',
    zIndex: 233,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
  footer: {
    padding: 10,
    backgroundColor: 'grey',
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  }
});

export default styles;