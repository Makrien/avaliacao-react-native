import { Image, Text, TouchableOpacity, View } from "react-native"
import copyIcon from '../../../src/assets/icons/copy-icon.png'
import heartIcon from '../../../src/assets/icons/heart-icon.png'
import IconF from 'react-native-vector-icons/Feather'
import styles from "./LowerHeaderStyles";
import userIcon from '../../../src/assets/icons/user-icon.png'

const LowerHeader = () => {
  return (
    <View style={styles.lowerHeader}>
        <TouchableOpacity style={styles.dropdownBtn} activeOpacity={.7}>
          <Text style={styles.dropdownBtnText}>Source:</Text>
          <View style={styles.dropdownBtnInfo}>
            <Text style={styles.dropdownBtnQtd}>13</Text>
            <IconF name="chevron-down" color="#e3993c"></IconF>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.7}>
          <Image source={heartIcon} style={styles.lowerHeaderIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.7}>
        <Image source={userIcon} style={styles.lowerHeaderIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.7}>
        <Image source={copyIcon} style={styles.lowerHeaderIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownBtn} activeOpacity={.7}>
          <Text style={styles.dropdownBtnText}>Topic:</Text>
          <View style={styles.dropdownBtnInfo}>
            <Text style={styles.dropdownBtnQtd}>24</Text>
            <IconF name="chevron-down" color="#e3993c"></IconF>
          </View>
        </TouchableOpacity>
      </View>
  )
}

export default LowerHeader