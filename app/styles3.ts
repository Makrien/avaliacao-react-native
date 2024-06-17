import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151414',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    height: 120,
  },
  headerArrow: {
    color: 'white',
  },
  netflixLogo: {
    width: 200,
    height: 40
  },
  inputContainer: {
    justifyContent: 'center',
    marginTop: 100
  },
  emailPhoneInput: {
    backgroundColor: '#666363',
    height: 72,
    margin: 10,
    padding: 4,
    borderRadius: 5
  },
  emailPhoneText: {
    color: '#fff',
    marginLeft: 10,
  },
  inputPassword: {
    backgroundColor: '#403d3d',
    height: 72,
    margin: 10,
    padding: 4,
    borderRadius: 5
  },
  passwordText: {
    color: '#878181',
    fontSize: 20
  },
  signInBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    height: 72,
    margin: 10,
    padding: 4,
    borderRadius: 5
  },
  signInText: {
    color: '#fff',
    fontSize: 22,
  },
  footerContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    height: 300
  },
  footerText: {
    color: '#827d7d',
    textAlign: 'center'
  },
  footerLinkText: {
    color: '#827d7d',
    fontWeight: '700'
  }
});

export default styles