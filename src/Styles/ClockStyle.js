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
})