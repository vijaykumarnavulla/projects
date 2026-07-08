import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrowContainer: {
      marginVertical: 10,
    },
    arrowRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      borderRadius: 8,
      overflow: 'hidden',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 10,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'lightblue',
      width:75,
      height:50
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    btnborder:{
      borderColor:'#00000047',
      borderWidth:3,
    },
    borderele:{
      borderColor:'#000000c8',
      borderWidth:5,
    }
  });

export default styles;