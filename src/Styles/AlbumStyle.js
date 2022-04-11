import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        padding: 5,
        flex: 1,
    },
    inner:{
        flexDirection: 'row',
        borderWidth: 1,
        margin: 10,
    },
    innerImage:{
        margin: 10,
    },
    image:{
        width: 75,
        height: 75,
    },
    innerText:{
        flex: 1,
        margin: 10,
    },
    innerUlti:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        flex: 1,
        margin: 10,
    }
});