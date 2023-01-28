import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function PageWrapper({children = null}) {
  const themeName = useSelector(state => state.theme.themeName);

  return (
    <div className={`theme-${themeName} w-screen h-screen bg-theme-fill`}>
      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node,
}
export default PageWrapper;