import React from 'react';
import WarningBanner from './WarningBanner';

type BannerPageState = {
	showWarning: boolean;
};

type BannerPageProps = {};

class BannerPage extends React.Component<BannerPageProps, BannerPageState> {
	constructor(props: BannerPageProps) {
		super(props);
		this.state = { showWarning: true };
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(state => ({
			showWarning: !state.showWarning,
		}));
	}

	render() {
		return (
			// будет ли содержимое <WarningBanner /> отрендерено, зависит от значения пропа под именем warn. Если значение false, компонент ничего не рендерит
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Спрятать' : 'Показать'}
				</button>
			</div>
		);
	}
}

export default BannerPage;
