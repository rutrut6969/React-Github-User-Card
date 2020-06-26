import React from 'react';

export default class FollowerCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='followerCard'>
        <h4>{this.props.followers.login}</h4>
        {console.log(this.props.followers)}
      </div>
    );
  }
}
