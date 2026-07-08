import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  touchableOpacity: {
    alignItems: 'center',
  },
  textContainer: {
    position: 'relative',
  },
  dotContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -8,
    alignItems: 'center',
  },
  dotText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 29
  },
  vcontainer: {
    backgroundColor: '#b39191c1',
    height: '90%',
    width: '90%',
    margin: 'auto',
    borderRadius: '2%'
  },
  arrowbutnContainer: {
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10, // Add padding to the left and right sides
    paddingVertical: 10, 
  },
  container: {
    // padding: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
    gap: 10, 
  },
  dotContainerCenter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotContainerBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -8,
    alignItems: 'center',
  },
  button: {
    // backgroundColor: '#007AFF',
    paddingVertical: 8,
    // paddingHorizontal: 16,
    borderRadius: 4,
    // marginHorizontal: 8,
    alignItems: 'center',
    width: 75,
    height: 50,
    marginRight:10,
  },
  btnborder:{
    borderColor:'#00000047',
    borderWidth:3,
  },
  borderele:{
    borderColor:'white',
    borderWidth:5,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
  colorContainer: {
    flexDirection: 'row',
  },
  logContainer: {
    flex: 1,
  },
  logTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  logScroll: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  logText: {
    marginBottom: 8,
  },
});

export default styles;