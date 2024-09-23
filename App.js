import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { planetas } from './planetas'
import { Planet } from './Planet';

export default function App() {

  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safe}>
        <StatusBar backgroundColor='#000000' />
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <Text style={styles.textStyle}>Vamos explorar!</Text>
            <Image
              style={styles.logo}
              source={require('./assets/vet.png')}
            />
          </View>

          {
            planetas.map((planeta) => (
              <Planet planeta={planeta}></Planet>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center'
  },
  textStyle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    paddingBottom: 15
  },
  header: {
    marginTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around'
  },
  logo: {
    width: 100,
    height: 100
  },
  scroll: {
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
});
