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
						<div className='overlay d-flex align-items-center justify-content-center'>
							{episode.watched &&
								<span>Watched</span>
							}
							{!episode.watched &&
								<span>Not watched</span>
							}

						</div>
					</div>

					)}
					</div>
		</>
	);
};

export default EpisodeList;
