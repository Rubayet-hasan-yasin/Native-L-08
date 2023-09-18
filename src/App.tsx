import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { addTrack, setupPlayer } from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setUp() {
    let isSetUp = await setupPlayer()

    if (isSetUp) {
      addTrack()
    }

    setIsPlayerReady(isSetUp)
  }

  useEffect(() => {
    setUp()
  }, [])

  if (!setIsPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <MusicPlayer/>

      {/* <Text>ooooookkkkkk</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
