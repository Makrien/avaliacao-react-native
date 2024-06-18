import { Button, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import { LinearGradient } from 'expo-linear-gradient';
import shazamIcon from '../src/assets/icons/shazam-icon.png';
import shazamLogo from '../src/assets/icons/shazam-logo-icon.png'
import Icon from 'react-native-vector-icons/Feather';

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#00d4ff','#066cff']} style={styles.gradient} >
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="layers" size={40} color="#fff" />
            <Text style={styles.iconText}>Library</Text>
          </TouchableOpacity>
          <Icon name="more-horizontal" size={40} color="#fff" />
          <TouchableOpacity activeOpacity={0.7}>
            <Icon name="activity" size={40} color="#fff" />
            <Text style={styles.iconText}>Charts</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.mainText}>Tap to Shazam!</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.shazamBtn}>
          <Image source={shazamLogo} style={styles.shazamIcon} tintColor={"#fff"}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.searchBtn}>
          <Icon name="search" size={40} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>      
    </View>
  );
}
