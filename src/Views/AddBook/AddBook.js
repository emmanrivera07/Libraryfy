import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Picker} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  formRowOne: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    minWidth: 150,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    marginBottom: 10,
  },
  formGroup: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 16,
  },

  button:{
      color: 'gray'
  },
  text:{
      fontSize:18
  }
});

export default function AddBook(){
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>
          <View style={styles.formRowOne}>
            <View>
              <Button 
                color="#F6BABA"
                type="outline"
                title="Seleccionar carátula"
              />
            </View>
          </View>
          <View style={styles.formGroup}>
            <TextInput
              label="Título"
              style={styles.textInput}
              placeholder="Nombre del libro"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.text} h4>Categorías:</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Científico" value="Científico" />
                <Picker.Item label="Novela" value="Novela" />
                <Picker.Item label="Drama" value="Drama" />
                <Picker.Item label="Ficción" value="Ficción" />
            </Picker>
          </View>
          <View style={styles.formGroup}>
            
            <TextInput
              label="Título"
              style={styles.textInput}
              placeholder="Nombre del autor"
            />
          </View>
          <View >
            <View style={styles.formRowOne}>
              <Button 
                color="#F6BABA"
                type="outline"
                title="Añadir libro"
              />
            </View>
          </View>
        </View>
      );
    
    
}
  