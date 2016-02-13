import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.lime800,
    primary2Color: Colors.lime800,
    primary3Color: Colors.lime800,
    accent1Color: Colors.lime800,
    accent2Color: Colors.lime800,
    accent3Color: Colors.lime800,
    textColor: Colors.lime800,
    alternateTextColor: Colors.lime800,
    canvasColor: Colors.lime800,
    borderColor: Colors.lime800,
    disabledColor: ColorManipulator.fade(Colors.lime800, 0.3),
    pickerHeaderColor: Colors.lime800,
  }
};
