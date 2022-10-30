import PropTypes from 'prop-types';

const Filter = ({onFilter}) => {
    return (
        <>
          <label htmlFor="">
          Find contacts by name
          <input 
          type="text" 
          onChange={onFilter}
          />
        </label>
        </>
    )
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
}