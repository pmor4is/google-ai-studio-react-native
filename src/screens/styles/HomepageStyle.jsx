import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E4E4E4',
        padding: 20
    },
    wrapper: {
        width: "100%",
        height: 700,
        backgroundColor: '#FFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    btn: {
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ABD1C6',
        marginTop: 20,
    }
})

export default styles;