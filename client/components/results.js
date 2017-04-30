import React from 'react';

const Results = (props) => 
    <div className="results">
		<ul>
		 	{props.data}
		</ul>
    </div> 

Results.proptypes = {
	data: React.PropTypes.string.isRequired, 
}    


export default Results;