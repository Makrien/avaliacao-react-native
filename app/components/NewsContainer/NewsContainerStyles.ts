import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
})

export default styles