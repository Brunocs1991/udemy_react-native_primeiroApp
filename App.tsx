import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class App extends Component {
  render() {
    let nome = 'Bruno';
    let img = 'https://sujeitoprgramador.com/steve.svg';

    return (
      <View>
        <Text>Olá Mundo!!!</Text>
        <Text>Meu Primeiro APP</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Sujeito Programador
        </Text>
        <Image source={{uri: img}} style={{width: 300, height: 300}} />
        <Text style={{fontSize: 30}}>{nome}</Text>
      </View>
    );
  }
}

export default App;
