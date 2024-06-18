import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    paddingHorizontal: 5,
  },
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
  newsContainer: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  newsCard: {
    height: 100,
    padding: 8,
    backgroundColor: '#424242',
    marginVertical: 4,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
  imgHeadline: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  newsImg: {
    width: 100,
    height: 56,
  },
  headline: {
    color: '#fff',
    fontSize: 16,
    maxWidth: 260,
    marginLeft: 4,
  },
  newsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  newsInfoText: {
    color: '#fff',
    fontSize: 12,
  },
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
  footerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10
  },
  footerRow1Text: {
    color: 'white',
  },
  footerRow2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 8,
    backgroundColor: '#212121'
  },
  footerRow2Item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerRow2Icon: {
    width: 20,
    height: 20,
  },
  footerRow2Text: {
    color: '#fff',
    fontSize: 10,
  },
});

export default styles