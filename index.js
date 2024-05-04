import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  NativeModules,
} from 'react-360';

const { AudioModule } = NativeModules;

export default class my_react_360_project extends React.Component {
  state = {
    count: 0,
    playSoundAfterFirstTime: true,
    isFirstTimePlay: true
  };

  _incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  _playSound = () => {
    this.setState({
      playSoundAfterFirstTime: !this.state.playSoundAfterFirstTime,
    });

    if (this.state.isFirstTimePlay) {
      AudioModule.createAudio('sza', {
        source: asset('haoulou.mp3'),
        volume: 0.5,
      });
      AudioModule.play('sza');
      this.setState({
        isFirstTimePlay: false,
      });
    } else {
      if (this.state.playSoundAfterFirstTime) {
        AudioModule.play('sza');
      } else {
        AudioModule.stop('sza');
      }
    }
  };

  render() {
    return (
      <View style={styles.panel}>
        {/* <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View> */}
        <VrButton onClick={this._incrementCount} style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {`You have visited Simmes ${this.state.count} times`}
          </Text>
        </VrButton>
        <VrButton onClick={this._playSound} style={styles.greetingBox}>
          <Text style={styles.greeting}>
            {'You can play the music of your people'}
          </Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent(
  'my_react_360_project',
  () => my_react_360_project
);
