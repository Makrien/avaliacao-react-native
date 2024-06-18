import { Image, Text, TouchableOpacity, View } from "react-native"
import dictionaryIcon from '../../../src/assets/icons/dictionary-icon.png'
import examIcon from '../../../src/assets/icons/exam-icon.png'
import filmIcon from '../../../src/assets/icons/film-icon.png'
import lessonIcon from '../../../src/assets/icons/lesson-icon.png'
import newspaperIcon from '../../../src/assets/icons/newspaper-icon.png'
import styles from "./LowerFooterStyles"

const LowerFooter = () => {
  return (
    <View style={styles.footerRow2}>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={newspaperIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={lessonIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>Lesson</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={dictionaryIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>Dictionary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={examIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>JLPT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerRow2Item} activeOpacity={.7}>
            <Image source={filmIcon} style={styles.footerRow2Icon} tintColor={'white'} />
            <Text style={styles.footerRow2Text}>More</Text>
          </TouchableOpacity>
      </View>
  )
}

export default LowerFooter