import React from 'react';
import info from '../data/info';
import fuzzyFind from '../logic/fuzzyFind';
import Header from './header';
import Searchbar from './searchbar';
import Results from './results';

class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
	   	this.query = this.query.bind(this)
	}
    
	query(e) {
		this.setState({input: e.target.value})	
	}

	render() {
        const data = info.map((item, idx) => {
            let result = fuzzyFind(item, this.state.input)
            if (result) return <li key={idx}>{result}</li> 
        })
		return (
    		<div>  
                <Header />
                <Searchbar 
                    query={this.query}
                    value={this.state.input}
                />
                <Results 
                    data={data}
                />
    		</div>
	    )	
	}
}

MainComponent.proptypes = {
	query: React.PropTypes.func.isRequired,
	value: React.PropTypes.string.isRequired,
	data: React.PropTypes.array.isRequired,
	key: React.PropTypes.number.isRequired,
}

export default MainComponent;
