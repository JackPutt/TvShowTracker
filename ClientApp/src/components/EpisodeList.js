import React from 'react';

const EpisodeList = (props) => {

	return (
		<>
				<div className='series-container'>
					<h3>Episodes</h3>
				{props.episodeList.map((episode, i) =>
					<div className='series m-3' key={i}>
						<img className='series-img' src={episode.episodeImage} alt='episode' title={episode.episodeTitle}></img>
						<span>S{episode.seasonNumber} E{episode.episodeNumber}. {episode.episodeTitle}</span>
						{episode.watched ? (
							<div className='watched d-flex align-items-center justify-content-center'><span>Watched</span></div>
						): (
								<div className='overlay d-flex align-items-center justify-content-center' onClick={() => props.watchedEpisode(episode)}><span>Mark as watched</span></div>
						)
}
					</div>

					)}
					</div>
		</>
	);
};

export default EpisodeList;
