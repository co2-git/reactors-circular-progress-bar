import React, {Component} from 'react';
import {
  Image,
  Link,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'reactors';
import {Row, Stack} from 'reactors-grid';
import {Button, NumberInput, TextInput} from 'reactors-form';
import CircleProgressBar from 'reactors-circular-progress-bar';

export default class App extends Component {
  state = {
    percent: 75,
    color: 'red',
    border: 5,
    size: 200,
  };

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.h1}>Reactors Circular Progress Bar</Text>

        <Stack>
          <Row>
            <Text>Percent</Text>

            <NumberInput
              style={{
                height: 24,
                fontSize: 16,
                padding: 4,
                borderWidth: 1,
                width: 30,
                flexGrow: 2,
              }}
              value={this.state.percent}
              onChange={(percent) => {
                this.setState({percent: Number(percent)});
              }}
              />
          </Row>

          <Row>
            <Text>Color</Text>

            <TextInput
              style={{
                height: 24,
                fontSize: 16,
                padding: 4,
                borderWidth: 1,
                width: 75,
                flexGrow: 2,
              }}
              value={this.state.color}
              onChange={(color) => {
                this.setState({color});
              }}
              />
          </Row>

          <Row>
            <Text>Border</Text>

            <NumberInput
              style={{
                height: 24,
                fontSize: 16,
                padding: 4,
                borderWidth: 1,
                width: 50,
                flexGrow: 2,
              }}
              value={this.state.border}
              onChange={(border) => {
                this.setState({border: Number(border)});
              }}
              />
          </Row>

          <Row>
            <Text>Size</Text>
            <NumberInput
              style={{
                height: 24,
                fontSize: 16,
                padding: 4,
                borderWidth: 1,
                width: 30,
                flexGrow: 2,
              }}
              value={this.state.size}
              onChange={(size) => {
                this.setState({size: Number(size)});
              }}
              />
          </Row>
        </Stack>

        <View style={{padding: 20, borderWidth: 2}}>
          <CircleProgressBar
            border={this.state.border}
            color={this.state.color}
            percent={this.state.percent}
            size={this.state.size}
            />
        </View>

        <Text>{'<CircleProgressBar'}</Text>
        <Text>border={`{${this.state.border}}`}</Text>
        <Text>color="{this.state.color}"</Text>
        <Text>percent={`{${this.state.percent}}`}</Text>
        <Text>size={`{${this.state.size}}`}</Text>
        <Text>{'/>'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  link: {
    color: 'blue',
  },
  platformRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    margin: 10,
  },
  view: {
    margin: 20,
  },
});
