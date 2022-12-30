import PropTypes from 'prop-types';

function PageWrapper({children = null}) {
  return (
    <div className="w-screen h-screen bg-black">
      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node,
}
export default PageWrapper;