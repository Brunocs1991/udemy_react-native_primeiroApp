import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type TypePropsReceiveData = {};
type TypeStateReceiveData = {
  nome: string;
};

class ReceiveData extends Component<
  TypePropsReceiveData,
  TypeStateReceiveData
> {
  constructor(props: Readonly<TypePropsReceiveData> | TypePropsReceiveData) {
    super(props);
    this.state = {
      nome: '',
    };
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(nome: string) {
    if (nome.length > 0) {
      this.setState({nome: `Bem vindo: ${nome}`});
    } else {
      this.setState({nome: ''});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digile seu nome?"
          placeholderTextColor="#FFF"
          underlineColorAndroid={'transparent'}
          onChangeText={this.pegaNome}
        />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDD',
    margin: 10,
    fontSize: 20,
    padding: 10,
    color: '#FFF',
  },
  texto: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default ReceiveData;
