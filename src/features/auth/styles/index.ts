import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const AuthStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGreen800,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logoHeader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  textHeader: {
    flex: 1,
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'SourceSansPro-ExtraLight',
    letterSpacing: 1,
  },
  body: {
    flex: 3,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

const FormStyle = StyleSheet.create({
  formGroup: {},
  formItem: {
    marginBottom: 20,
  },
  labelInput: {
    color: Colors.lightGreen700,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'SourceSansPro-ExtraLight',
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGreen600,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: Colors.lightGreen900,
    fontFamily: 'SourceSansPro-LightItalic',
  },
  btnSignIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  btnSignUp: {
    borderColor: Colors.lightGreen900,
    borderWidth: 1,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  textSignUp: {
    color: Colors.lightGreen900,
  },
  loading: {
    position: 'absolute',
    right: 0,
  },
  errorMsg: {
    color: Colors.redA700,
    fontSize: 14,
    marginTop: 10,
  },
});

const SocialStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnSocial: {
    width: 100,
    height: 50,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.grey500,
    borderRadius: 10,
    borderWidth: 1,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
  },
  btnFacebook: {
    shadowColor: Colors.blue800,
  },
  btnGoogle: {
    shadowColor: Colors.red800,
  },
});

export { AuthStyle, FormStyle, SocialStyle };
