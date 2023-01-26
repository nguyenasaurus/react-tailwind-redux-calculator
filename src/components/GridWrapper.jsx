import PropTypes from 'prop-types';

function GridWrapper({children = null}) {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-12 px-6 my-8'>
      {children}
    </div>
  );
}

GridWrapper.propTypes = {
  children: PropTypes.node,
}
export default GridWrapper;