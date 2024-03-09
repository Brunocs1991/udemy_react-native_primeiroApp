import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TypeFlexLayoutProps = {};
type TypeFlexLayoutState = {};

class FlexLayout extends Component<TypeFlexLayoutProps, TypeFlexLayoutState> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.area1} />
        <View style={styles.area2} />
        <View style={styles.area3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
  },
  area1: {
    height: 65,
    // backgroundColor: '#ff0000',
  },
  area2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  area3: {
    height: 65,
    // backgroundColor: '#ffff00',
  },
});
export default FlexLayout;
