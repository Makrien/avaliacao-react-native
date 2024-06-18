import { Image, Text, TouchableOpacity, View } from "react-native"
import cameraIcon from '../../../src/assets/icons/camera-icon.png'
import closedEyeIcon from '../../../src/assets/icons/close-eye-icon.png'
import notebookIcon from '../../../src/assets/icons/notebook-icon.png'
import styles from "./UpperFooterStyles"

const UpperFooter = () => {
  return (
    <View style={styles.footerRow1}>
        <TouchableOpacity style={styles.footerRow1Left} activeOpacity={.7}>
          <Image source={notebookIcon} style={styles.footerIcon} />
          <Text style={styles.footerRow1Text}>Notebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraIconContainer} activeOpacity={.9}>
          <Image source={cameraIcon} tintColor={'white'} style={styles.cameraIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerRow1Right} activeOpacity={.7}>
          <Image source={closedEyeIcon} style={styles.footerIcon} />
          <Text style={styles.footerRow1Text}>Furigana</Text>
        </TouchableOpacity>
      </View>
  )
}

export default UpperFooter