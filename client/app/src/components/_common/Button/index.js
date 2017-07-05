import { themr } from 'react-css-themr';
import { BUTTON } from '../../identifiers';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import theme from './styles.scss';

const applyTheme = (Component) => themr(BUTTON, theme)(Component);
const ThemedButton = applyTheme(Button);


export {
  ThemedButton as Button,
  ButtonGroup
};
