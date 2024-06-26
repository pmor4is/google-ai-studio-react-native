import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E4E4E4',
      padding: 20,
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
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      height: 60,
      marginHorizontal: 10,
    },
    input: {
      width: "100%",
      height: 55,
      borderRadius: 16,
      paddingHorizontal: 15,
      justifyContent: "center",
      marginBottom: 20,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button: {
      marginTop: 20,
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 10,
    }
  });

  export default styles;