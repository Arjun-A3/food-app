import { useState } from 'react';
import './style.css';

const Search = (prop) => {
    const {C2Pbridge} = prop;
    const [inputValue, setInputValue] = useState('')  
    const handleInputValue = (event)=>{
        const{value}= event.target;
        setInputValue(value)
    }
    const Handlesub = (event)=>{
        event.preventDefault();
        C2Pbridge(inputValue);
    }
    return (
        <form className="Search" onSubmit={Handlesub}>
            <input name="Search" onChange={handleInputValue} value={inputValue} placeholder="search Recipes" id="Search" />
            <button type="submit">Search</button>
        </form>
    )
}
export default Search;