import {StyleSheet} from 'reactors';

// const IOS = Platform.OS === 'ios';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    overflow: 'hidden',
    // borderWidth: IOS ? 0 : 1,
    borderColor: 'transparent',
  },
  right: {
    // borderWidth: IOS ? 0 : 1,
    borderColor: 'black',
    overflow: 'hidden',
    transform: [
      {rotate: '180deg'}
    ],
    // marginBottom: -2,
  },
});
