

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