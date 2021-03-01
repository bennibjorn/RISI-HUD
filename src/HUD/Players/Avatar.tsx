import React from 'react';
import { avatars } from './../../api/avatars';

import { Skull } from './../../assets/Icons';

interface IProps {
	steamid: string;
	height?: number;
	width?: number;
	showSkull?: boolean;
}
export default class Avatar extends React.Component<IProps> {
	render() {
		const avatarData = avatars[this.props.steamid];
		return (
			<div className={`avatar`}>
				{this.props.showSkull ? (
					<Skull height={this.props.height} width={this.props.width} />
				) : (
					<img src={avatarData.url || ''} height={this.props.height} width={this.props.width} alt={''} />
				)}
			</div>
		);
	}
}
