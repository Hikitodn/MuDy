import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 3,
        marginLeft: 5,
    },
    listContainer: {
        margin: 5,
        flex: 1,
    },
    addInput:{
        backgroundColor: "#fff",
        width: 30,
        height: 30,
        justifyContent:'center',
        alignItems: 'center',
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
    },
    innerInput:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2.5,
    },
    innerUlti:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputTodo:{
        backgroundColor:"#fff",
        width: 150,
        borderWidth: 1,
        padding: 2.5,
        borderRadius: 5,
    },
    Ulti: {
        marginHorizontal: 7.5,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 2,
        borderWidth: 1,
    },
})