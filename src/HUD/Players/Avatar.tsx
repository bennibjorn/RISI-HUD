import React from 'react';

import { Skull } from './../../assets/Icons';
import { Player } from 'csgogsi-socket';

export default class Avatar extends React.Component<{player: Player, head?: boolean, height?: number, width?: number, showSkull?: boolean}> {
  render(){
    let url = this.props.player.avatar || '';
    if (this.props.head && this.props.player.extra.face) {
      url = this.props.player.extra.face;
    } else if (this.props.player.extra.main) {
      url = this.props.player.extra.main;
    }
    return (
      <div className={`avatar`}>
          <img src={this.props.showSkull ? Skull : url} height={this.props.height} width={this.props.width} alt={''} />
      </div>
    );
  }

}
