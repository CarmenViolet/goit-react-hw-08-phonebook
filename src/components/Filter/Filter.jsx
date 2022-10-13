import PropTypes from 'prop-types';

const Filter = ({filter, onFilter}) => {
    return (
        <>
          <label htmlFor="">
          Find contacts by name
          <input 
          type="text" 
          value={filter}
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