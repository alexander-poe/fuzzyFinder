import React from 'react';



const Searchbar = (props) => 
    <div className="searchBar"> 
		<input 
            onChange={props.query} 
            type="text" 
            id="input" 
            value={props.value} 
        />
    </div>

 Searchbar.proptypes = {
	query: React.PropTypes.func.isRequired,
	value: React.PropTypes.string.isRequired,
}   
		


export default Searchbar;