import React from 'react';
import { Team } from 'csgogsi-socket';
import * as I from '../../api/interfaces';
import { apiUrl } from './../../api/api';

export default class TeamLogo extends React.Component<{
	team?: Team | I.Team | null;
	height?: number;
	width?: number;
}> {
	render() {
		const { team } = this.props;
		if (!team) return null;
		let id = '';
		const { logo } = team;
		if ('_id' in team) {
			id = team._id;
		} else if ('id' in team && team.id) {
			id = team.id;
		}
		return (
			<div className={`logo`}>
				{this.props.team.logo ? (
					<img
						src={`data:image/jpeg;base64,${this.props.team.logo}`}
						width={this.props.width}
						height={this.props.height}
						alt={''}
					/>
				) : (
					''
				)}
			</div>
		);
	}
}
