import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import colors from "../utils/Colors";

const Form = ({setNombre, setSalarioBase}) => {
    return (
      <>
        <View style={styles.viewForm}>
      
          <View style={styles.viewInputs}>
            <TextInput
              placeholder="Nombre Empleado:"
              keyboardType="text"
              style={styles.input}
              onChange={(e) => setNombre(e.nativeEvent.text)}
            />
            <TextInput
              placeholder="Salario Base: 100$"
              keyboardType="numeric"
              style={[styles.input, styles.inputPercentage]}
              onChange={(e) => setSalarioBase(e.nativeEvent.text)}
            />
          </View>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    viewForm: {
      position: "absolute",
      bottom: 0,
      width: "85%",
      paddingHorizontal: 50,
      backgroundColor: colors.PRIMARY_COLOR_DARK,
      borderRadius: 30,
      height: 180,
      justifyContent: "center",
    },
    viewInputs: { flexDirection: "row" },
    input: {
      height: 50,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: colors.PRIMARY_COLOR,
      borderRadius: 5,
      width: "60%",
      marginRight: 5,
      marginLeft: -5,
      marginBottom: 10,
      color: "#000",
      paddingHorizontal: 20,
    },
    inputPercentage: { width: "40%", marginLeft: 5 },
  });
  
   export default Form;