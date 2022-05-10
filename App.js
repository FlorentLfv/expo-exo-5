import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.purpleContainer}></View>
          <View style={styles.yellowContainer}></View>
          <View style={styles.pinkContainer}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.redContainer}></View>
          <View style={styles.blueContainer}></View>
          <View style={styles.column}>
            <View style={styles.cyanContainer}></View>
            <View style={styles.magentaContainer}></View>
          </View>
        </View>
      </View>
      <View style={styles.greyContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 2,
    flexDirection: "row"
  },
  column: {
    flex: 3,
    flexDirection: "column"
  },
  greyContainer: {
    flex: 3,
    backgroundColor: 'lightgrey',
  },
  cyanContainer: {
    flex: 2,
    backgroundColor: 'cyan',
  },
  magentaContainer: {
    flex: 1,
    backgroundColor: 'magenta',
  },
  redContainer: {
    flex: 2,
    backgroundColor: 'red',
  },
  blueContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  purpleContainer: {
    flex: 3,
    backgroundColor: 'purple',
  },
  yellowContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  pinkContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
