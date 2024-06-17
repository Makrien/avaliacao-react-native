import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  upperHeader: {
    height: 30,
    backgroundColor: '#000'
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
  newsContainer: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  newsCard: {
    height: 100,
    padding: 8,
    backgroundColor: '#424242',
    marginBottom: 12,
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
  }
});

export default styles