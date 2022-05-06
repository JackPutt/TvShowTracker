import React from 'react';

const EpisodeList = (props) => {

	return (
		<>
				<div className='series-container'>
				<h3>Episodes</h3>
				<a className='btn btn-add' onClick={() => props.getNextSeason(props.episodeList[0].seriesID, props.episodeList[props.episodeList.length - 1].seasonNumber + 1)}>Add Season</a>
				<div className='row'>
				{props.episodeList.map((episode, i) =>
					<div className='series m-3 no-padding' key={i}>
						{i > 0 && props.episodeList[i - 1].watched && !episode.watched ? (<div className='next-to-watch'><span>Next to watch</span></div>) : (<div></div>)}
						<img className='series-img' src={episode.episodeImage} alt='episode' title={episode.episodeTitle}></img>
						<span>S{episode.seasonNumber} E{episode.episodeNumber}. {episode.episodeTitle}</span>
						{episode.watched ? (
							<div className='watched d-flex align-items-center justify-content-center'><span>Watched</span></div>
						): (
								<div className='overlay d-flex align-items-center justify-content-center' onClick={() => props.watchedEpisode(episode)}><span>Mark as watched</span></div>
						)}
					</div>

					)}
				</div>
			</div>
		</>
	);
};

export default EpisodeList;
