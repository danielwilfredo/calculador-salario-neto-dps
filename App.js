import React, {useState, useEffect}
 from 'react';
 import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Colors from './src/utils/Colors'
import Form from './src/components/Form'
import Footer from './src/components/Footer'
import Salario from './src/components/Salario'

export default function App() {

  //creando los state
  const [salariobase, setSalarioBase] = useState(0);
  const [salarioneto, setSalarioNeto] = useState(0);
  const [nombre, setNombre] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const calculate = () => {
    reset();
      if (nombre=="") {
      setErrorMessage("Ingrese un Nombre"); return;
    } else if (salariobase=="" || salariobase<0) {
      setErrorMessage("Ingrese un salario base"); return;
    } else {
       let descuentos=(salariobase*0.03)+(salariobase*0.04)+(salariobase*0.05);
       let salNeto=parseFloat(salariobase-descuentos);
       setSalarioNeto(salNeto)
    }
  };

  useEffect(() => {
    if (nombre && salariobase) calculate();
    else reset();
  }, []);

  const reset = () => {
    setErrorMessage("");
    setSalarioNeto(0);
  };


  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background} />
      <Text style={styles.titleApp}>Calcular Salario Neto</Text>
      <Form
        setSalarioBase={setSalarioBase}
        setNombre={setNombre}
      />
    </SafeAreaView>
    <Salario
    setSalarioNeto={setSalarioNeto}
    salariobase={salariobase}
    salarioneto={salarioneto}
    nombre={nombre}
      errorMessage={errorMessage}
    />
    <Footer calculate={calculate}/>
  </>
  );
}

const styles = StyleSheet.create({
  safeArea: { height: 200, alignItems: "center" },
  background: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  titleApp: { fontSize: 25, fontWeight: "bold", color: "#fff", marginTop: 15 },
}
);