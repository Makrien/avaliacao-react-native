import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footerRow1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 36,
  },
  footerRow1Left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#77afd0'
  },
  footerRow1Right: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#8b8b8b'
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10
  },
  footerRow1Text: {
    color: 'white',
  },
  cameraIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f54336',
    borderRadius: 50,
    position: 'absolute',
    left: '43%',
    bottom: 0,
    zIndex: 1,
    width: 48,
    height: 48
  },
  cameraIcon: {
    height: 28,
    width: 28
  },
})

export default styles