import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <View style={styles.button}>
      <TouchableOpacity> 
        <Text>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Clique aqui' />
      <Button title='Clique aqui 2' />
      <Button title='Clique aqui 3' />
      <Button title='Hello world' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  button: {
    backgroundColor: '#34c3eb',
    borderRadius: 10,
    padding: 20,
    margin: 20
  }

});
