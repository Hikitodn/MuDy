import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    clockContainer: {
        padding: 5,
        margin: 5,
        alignSelf: 'flex-end',
    },
    innerClockWeather:{
        flexDirection: 'row',
        borderWidth: 3,  
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    weatherImage:{
        width: 50,
        height: 50,
    },
    clockText:{
        fontFamily: 'Digital-7',
        fontSize: 45,
        padding: 5,
    },
    ultiContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    innerUlti:{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
    innerClockImage:{
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 5,
    },
    centerBell: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
    },
    bellModal:{
        width: 300,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000',
    },
    bellBody: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellButton: {
        flexDirection: 'row',
        height: 50,
    },
    bellInput:{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
    },
    bellCancel:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bellOk:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})