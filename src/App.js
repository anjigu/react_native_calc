import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text stlye={styles.text}>RN Calc App</Text>
      <Button 
      title="button" 
      color={'red'} 
      onPress={()=>console.log('click')}
      />
      <Button />
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
  text: {
    fontSize: 100,
    fontWeight: '700',
    color: 'green'
  },
});