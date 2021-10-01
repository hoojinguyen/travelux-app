import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const AuthStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue700,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  textHeader: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
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
    color: Colors.blueGrey900,
    fontSize: 18,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blueGrey600,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: Colors.blueGrey900,
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
    borderColor: Colors.lightBlue800,
    borderWidth: 1,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
  textSignUp: {
    color: Colors.lightBlue800,
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

export { AuthStyle, FormStyle };
