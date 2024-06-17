import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import Icon from 'react-native-vector-icons/Feather';
import netflixLogo from '../src/assets/icons/netflix-brand-logo.png'

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={.7} style={styles.header}>
        <Icon name="arrow-left" style={styles.headerArrow} size={42}></Icon>
        <Image source={netflixLogo} style={styles.netflixLogo}/>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <View style={styles.emailPhoneInput}>
          <Text style={styles.emailPhoneText}>Email or phone number</Text>
          <TextInput />
        </View>
        <View style={styles.inputPassword}>
          <Text style={styles.passwordText}>Password</Text>
          <TextInput />
        </View>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Need help?</Text>
        <Text style={styles.footerLinkText}>New to Netflix? Sign up now.</Text>
        <Text style={styles.footerText}>Sign-in is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Text>
      </View>
    </View>
  );
}
