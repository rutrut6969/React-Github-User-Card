import React from 'react';
import FollowerCard from './FollowerCard';
export default class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
    };
  }

  render() {
    return (
      <section className='followers'>
        {this.props.state.followers.map((item) => (
          <FollowerCard followers={item} />
        ))}
      </section>
    );
  }
}
