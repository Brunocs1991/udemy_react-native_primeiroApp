import React, {Component} from 'react';
import Inicial from './Screen/Inicial.tsx';
import State from './Screen/State.tsx';
import GrupoStyle from './Screen/GrupoStyle.tsx';
import {SafeAreaView} from 'react-native';
import FlexLayout from './Screen/FlexLayout.tsx';

class App extends Component {
  render() {
    return (
      <>
        {/*<Inicial />*/}
        {/*<State />*/}
        {/*<GrupoStyle />*/}
        <FlexLayout />
      </>
    );
  }
}

export default App;
