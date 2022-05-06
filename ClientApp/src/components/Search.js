import React from 'react';

const Search = (props) => {
	return (
		<>
			<div className='col col-sm-6'>
				<input
					className='form-control'
					value={props.value}
					onChange={(event) => props.setSearchValue(event.target.value)}
					placeholder='Search for a series to begin...'></input>
			</div>
			<div className='col col-sm-6'>
				<a className="btn btn-primary" onClick={() => { props.search() }}>Search</a>
			</div>
		</>
	);
};

export default Search;