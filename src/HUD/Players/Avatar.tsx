import React from 'react';

import { Skull } from './../../assets/Icons';
import { Player } from 'csgogsi-socket';

export default class Avatar extends React.Component<{player: Player, height?: number, width?: number, showSkull?: boolean}> {
  render(){
    const url = this.props.player.avatar || '';
    return (
      <div className={`avatar`}>
          <img src={this.props.showSkull ? Skull : url} height={this.props.height} width={this.props.width} alt={''} />
      </div>
    );
  }

}
