import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import Dimensions from '../../../constants/dimens';

const WIDTH_SCREEN = Dimensions.common.WINDOW_WIDTH;
const HEIGHT_SCREEN = Dimensions.common.WINDOW_HEIGHT;

const AccountStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: HEIGHT_SCREEN / 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  avatarWrapper: {
    position: 'absolute',
    top: HEIGHT_SCREEN / 6,
    left: WIDTH_SCREEN / 3,
  },
  avatarImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  iconOutside: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
    bottom: 5,
    borderColor: Colors.grey300,
    borderRadius: 15,
    borderWidth: 1,
  },
  iconInside: {
    fontSize: 18,
    position: 'absolute',
    top: 5,
    left: 6,
  },
  username: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center',
    paddingTop: 5,
  },
  content: {
    flex: 2,
    marginTop: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  buttonWrapper: {
    width: (WIDTH_SCREEN - 40) / 3,
    padding: 10,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  buttonDesc: {
    fontSize: 13,
    fontFamily: 'SourceSansPro-ExtraLight',
  },
  buttonIcon: {
    fontSize: 26,
  },
});

export { AccountStyle };
