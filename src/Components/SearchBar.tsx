import {AiOutlineSearch} from 'react-icons/ai';


const SearchBar = () => {
  return (
    <div className='topBar'>
      
        <input
        type="text"
        className="cityInput"
        placeholder="Search"/>

        

        <AiOutlineSearch size="20"/>
        
        
    </div>  

)}

export default SearchBar