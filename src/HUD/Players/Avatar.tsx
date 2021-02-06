import React from 'react';
import { isDev, port } from '../../api/api';
import { actions } from '../../App';

import { Skull } from './../../assets/Icons';
import { Player } from 'csgogsi-socket';

interface IProps {
  steamid: string,
  slot?: number,
  height?: number,
  width?: number,
  showSkull?: boolean,
  showCam?: boolean
}
interface IState {
  enableCams: boolean
}

{/*export default class Avatar extends React.Component<IProps, IState> {
  state = {
    enableCams: !!this.props.showCam
  }
  componentDidMount(){
    actions.on("toggleCams", () => {
      this.setState({enableCams: !this.state.enableCams})
  });
  }
  render(){
    const { enableCams } = this.state;
    //const url = avatars.filter(avatar => avatar.steamid === this.props.steamid)[0];
    const avatarData = avatars[this.props.steamid];
    if(!avatarData || !avatarData.url){
        return '';
    }
    const slot = this.props.slot === 0 ? 10 : this.props.slot || 1;
    const leftPosition = - 150*((slot-1)%5);
    const topPosition = slot > 5 ? -150 : 0;
    return (
      <div className={`avatar`}>
          {
            this.props.showCam ? <div  id="cameraFeed" style={{ display: enableCams ? 'block' : 'none'}}><iframe style={{top: `${topPosition}px`, left: `${leftPosition}px`}} src={isDev ? `http://localhost:${port}/rmtp.html` : '/rmtp.html'} title="Camera feed" /></div> : null
          }
          {
            this.props.showSkull ? <Skull height={this.props.height} width={this.props.width} /> : <img src={avatarData.url} height={this.props.height} width={this.props.width} alt={'Avatar'} />
          }
           */}

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
