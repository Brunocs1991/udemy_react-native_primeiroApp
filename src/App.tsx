import React, {Component} from 'react';
import Inicial from './Screen/Inicial.tsx';
import State from './Screen/State.tsx';
import GrupoStyle from './Screen/GrupoStyle.tsx';
import {SafeAreaView} from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{margin: 5}}>
        {/*<Inicial />*/}
        {/*<State />*/}
        <GrupoStyle />
      </SafeAreaView>
    );
  }
}

export default App;
