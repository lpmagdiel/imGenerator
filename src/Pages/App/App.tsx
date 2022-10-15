import React from 'react';
import { Nav } from '@/Components/Nav';
import gitHubIcon from '@/assets/images/github.png';
import twitterIcon from '@/assets/images/twitter.png';
import { translate as t } from '@/translations/translate';
import { ContentBox, ImageBox, RandomBox, VideoBox } from '@/Components';
export interface AppInterface { }

export const App: React.FC<AppInterface> = () => {

	return (
		<>
			<Nav title="DummyGo">
				<a href="https://twitter.com/MagdielOmarLpez" target="_blank">
					<img src={twitterIcon} alt="Dummys Go - twitter" />
				</a>
				<a href="https://github.com/lpmagdiel/imGenerator" target="_blank">
					<img src={gitHubIcon} alt="Dummys Go - github" />
				</a>
			</Nav>
			<div className="space"></div>
			<div className="h-40 d-flex justify-content-center align-items-center p-3">
				<div dangerouslySetInnerHTML={{ __html: t("descriptionHeader") }}></div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<ImageBox />
					</div>
					<div className="col">
						<VideoBox />
					</div>
					<div className="col">
						<RandomBox />
					</div>
					<div className="col">
						<ContentBox title={'Avatar'} color="#f1c40f" icon={'😎'}>
							<div className="w-100 d-grid justify-content-center text-center">
								<p dangerouslySetInnerHTML={{ __html: t("avatarBoxDescription") }}></p>
								<div className="space"></div>
								<a href="/avatar" target="_blank">{t('openImage')}</a>
							</div>
						</ContentBox>
					</div>
				</div>
			</div>
			<div className="space"></div>
		</>
	)
}