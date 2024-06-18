import { Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from "./MainHeaderStyles"

const MainHeader = () => {
  return (
    <View style={styles.mainHeader}>
        <View style={styles.headerIconsContainer}>
          <Icon name="search" color="#fff" size={24}></Icon>
          <Icon name="history" color="#fff" size={24}></Icon>
        </View>
        <View style={styles.headerBtnContainer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.easyBtn}>
            <Text style={styles.easyBtnText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.difficultBtn}>
            <Text style={styles.difficultBtnText}>Difficult</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerIconsContainer}>
          <Icon name="audiotrack" color="#fff" size={24}></Icon>
          <Icon name="tune" color="#fff" size={24}></Icon>
        </View>
      </View>
  )
}

export default MainHeader