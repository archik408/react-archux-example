import { themr } from 'react-css-themr';
import { PAGE_LOADER } from '../../identifiers';
import PageLoader from './PageProgressBar';
import theme from './theme.scss';

const applyTheme = (Component) => themr(PAGE_LOADER, theme)(Component);
const ThemedPageLoader = applyTheme(PageLoader);

export default ThemedPageLoader;
