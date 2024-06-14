import { Text, View } from "react-native";
import styles from "./styles"
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#00d4ff','#066cff']} 
        style={styles.gradient}
      />
    </View>
  );
}
