import React from 'react';
import './usercard.css';
import Social from './userCardComps/social';
import CardHeader from './userCardComps/CardHeader';
import Body from './userCardComps/Body';
// import Followers from './userCardComps/Followers';
// import Repos from './userCardComps/Repos';

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkd: {
        url: 'https://www.linkedin.com/in/isaac-r-916ab195/',
      },
    };
  }
  style = {
    img: {
      //   backgroundImage: `url('${this.props.state.data.avatar_url}')`,
      width: '100px',
      height: '100px',
      //   backgroundColor: 'red',
    },
  };

  gotoGithub = (e) => {
    e.preventDefault();
    window.location.replace(`${this.props.state.data.html_url}`);
  };
  gotoLinkd = (e) => {
    e.preventDefault();
    window.location.replace(`${this.state.linkd.url}`);
  };
  render() {
    return (
      <div className='card'>
        <CardHeader state={this.props.state} style={this.style} />
        <Social gotoGithub={this.gotoGithub} gotoLinkd={this.gotoLinkd} />
        <Body state={this.props.state} />
        {/* <Repos state={this.props.state} /> */}
        {/* <Followers state={this.props.state} /> */}
      </div>
    );
  }
}
