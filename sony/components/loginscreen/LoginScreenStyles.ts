import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ecdedec1',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#b39191',
    padding: 10
  },
  htitle: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 0,
    textAlign: 'left',
  },
  container: {
    backgroundColor: '#b39191c1',
    height: '50%',
    width: '90%',
    margin: 'auto',
    borderRadius: '2%'
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
    textAlign: 'left',
    padding: 12
  },
  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginLeft: 10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    width: 250,
    margin: 10,
    flex: 0.3,
    flexDirection: 'row'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    flexBasis: '90%',
    padding: 10,
    alignContent: 'center'
  },
  prefixbutton: {
    color: '#ffffff91',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    alignContent: 'center'
  },
  errorHeader: {

  },
  etext: {
    color: '#ff000099',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },

});

export default styles;

