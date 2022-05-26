import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    AlbumView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerImage: {
        width: 200,
        height: 200,
        marginVertical: 50,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'dashed',
    },
    innerForm: {
        margin: 10,
    },
    title:{
        textAlign: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        paddingLeft: 5,
    },
    ButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5,
    },
    ButtonStyle: {
        marginLeft: 15,
        width: 100,
        backgroundColor: '#fff'
    },
});