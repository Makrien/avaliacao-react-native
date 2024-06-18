import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#212121'
  },
  headerIconsContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  headerBtnContainer: {
    flexDirection: 'row',
  },
  easyBtn: {
    width: 72,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  easyBtnText: {
    color: '#000',
    fontSize: 12,
  },
  difficultBtn: {
    width: 72,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    borderWidth: .5,
    borderColor: '#fff',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  difficultBtnText: {
    color: '#fff',
    fontSize: 12,
  },
})

export default styles