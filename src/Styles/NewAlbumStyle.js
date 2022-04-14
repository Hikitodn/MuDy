import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    AlbumView: {
        flex: 3,
        margin: 5,
        backgroundColor: '#2f2',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    innerAlbum: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    innerImage: {
        flex: 1,
        margin: 10,
        backgroundColor: '#2ff',
        alignItems:'stretch',
        justifyContent: 'center',
    },
    innerForm: {
        flex: 1,
    },
    SongsView: {
        flex: 8,
        backgroundColor: '#2ff',
        margin: 5,
    },
    ButtonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        margin: 5,
    },
    ButtonStyle: {
        marginLeft: 15,
        width: 100,
        backgroundColor: '#fff'
    }
});