import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Result = (props) => {
  const { setSalarioNeto, salariobase, salarioneto,nombre, errorMessage } = props;

    const descISS=salariobase*0.03;
    const descAFP=salariobase*0.04;
    const descRENTA=salariobase*0.05;


  return (
    <View style={styles.content}>
      
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Nombre Empleado:" value={`${nombre}`} />
          <DataResult title="Descuentos %:" value={`(ISSS- 3%, AFP-4%, RENTA-5%)`} />
          <DataResult title="Descuento ISS:" value={`- ${descISS} $`} />
          <DataResult title="Descuento RENTA:" value={`- ${descRENTA} $`} />
          <DataResult title="Descuento AFP:" value={`- ${descAFP} $`} />
          <DataResult title="Salario Base:" value={`${salariobase} $`} />
          <DataResult title="Salario Neto:" value={`${salarioneto} $`} />
        </View>
        <Text style={styles.error}>{errorMessage}</Text>
    </View>
  );
};

function DataResult(props) {
  const { title, value } = props;
  return (
    <View style={styles.value}>
        <Text>{title}</Text> <Text>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: { marginHorizontal: 40 },
  boxResult: { padding: 30 },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default Result;