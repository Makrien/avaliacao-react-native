import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  lowerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
    height: 42
  },
  dropdownBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    height: 32,
    width: 124,
    borderWidth: .3,
    borderColor: 'white',
    borderRadius: 3,
  },
  dropdownBtnText: {
    color: '#fff',
    fontSize: 11,
  },
  dropdownBtnInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 32,
  },
  dropdownBtnQtd: {
    color: '#e3993c',
  },
  lowerHeaderIcon: {
    height: 32,
    width: 32
  },
})

export default styles