import React from 'react';

const WatchList = (props) => {

	return (
		<>
			<div className='series-container'>
				<h3>Watch List</h3>
			{props.watchList.map((series, i) =>
				<div className='series m-3' key={i} >
					<img src={series.seriesImage} className='series-img' alt='tv show' title={series.seriesTitle}></img>
					<div className='overlay d-flex align-items-center justify-content-center'>
						<a className='link w-100' onClick={() => props.getEpisodes(series.seriesID)}>View Episodes</a>
						<br />
						<a className='link w-100' onClick={() => props.removeSeries(series.seriesID)}>Remove</a>
					</div>
				</div>
				)}
			</div>
		</>
	);
};

export default WatchList;
