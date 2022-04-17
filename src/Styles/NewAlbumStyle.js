import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    AlbumView: {
        height: 155,
        margin: 5,
        alignItems: 'stretch',
        justifyContent: 'center',
        borderWidth: 1,
    },
    innerAlbum: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    innerImage: {
        flex: 1,
        margin: 10,
        backgroundColor: '#2ff',
        alignItems:'center',
        justifyContent: 'center',
    },
    innerForm: {
        flex: 1.5,
        margin: 10,
        flexDirection: 'column',
    },
    title:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        paddingLeft: 5,
    },
    description:{
        flex: 1,
        backgroundColor: '#fff',
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
    },
    SongsView: {
        flex: 12,
        margin: 5,
        borderWidth: 1,
        backgroundColor: '#44d'
    },
    innerSongs: {
        margin: 10,
        flex: 1,
        backgroundColor: '#ff2'
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
    },
    innerAdd: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: '#22b',
        position: 'absolute',
        bottom: 0,
    },
    add:{
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: '#2ff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});