import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#066cff"
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
    width: '100%',
    height: 180,
    position: 'absolute',
    top: 0
  },
  iconText: {
    color: '#fff'
  },
  mainText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  shazamBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#4fb3fe',
    borderRadius: 100,
    marginTop: 50,
    marginBottom: 100,
  },
  shazamIcon: {
    width: 55,
    height: 120,
  },
  searchBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#4fb3fe',
    borderRadius: 50,
  }
});

export default styles