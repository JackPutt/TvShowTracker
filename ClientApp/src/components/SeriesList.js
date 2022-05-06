import React from 'react';

const SeriesList = (props) => {

	return (
		<>
			<div className='series-container'>
				<h3>Series</h3>
			{props.seriesList.map((series, i) =>
				<div className='series m-3' key={i} onClick={() => props.addToWatchList(series)}>
					<img src={series.image} alt='tv series' className='series-img' title={series.title}></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						<a className='link'>Add to watch list</a>
					</div>
				</div>

				)}
			</div>
		</>
	);
};

export default SeriesList;

