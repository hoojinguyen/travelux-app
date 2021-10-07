import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const MessageStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 20,
    borderColor: Colors.green700,
    borderWidth: 1,
    borderRadius: 20,
  },
});

export { MessageStyle };
