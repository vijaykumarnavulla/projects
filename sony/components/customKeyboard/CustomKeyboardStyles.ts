import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    keyboardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    displayBox: {
        borderColor: 'black',
        borderWidth: 5,
        margin: 4,
        backgroundColor: '#d3d3d34c',
        display:'flex',
        flexDirection:'row'
    },
    button: {
        width: 35,
        height: 35,
        marginRight: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        overflow: 'hidden'
    },
    buttonRect: {
        width: 'auto',
        height: 35,
        marginRight: 2,
        borderRadius: '10%',
        overflow: 'hidden',
        textAlign: 'center',
        alignItems: 'center'
    },
    btnborder: {
        borderColor: '#00000047', // Updated border styles
        borderWidth: 3,
    },
    borderele: {
        borderColor: '#000000c8', // Darker border for active state
        borderWidth: 3,
    },
    text: {
        fontSize: 24,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 80
    },
    letter: {
        fontSize: 24,
    },
    keyText: {
        color: 'white',
        fontSize: 24,
    },
});