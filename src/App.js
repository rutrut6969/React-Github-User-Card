import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/user-card/UserCard';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      followersUrl: '',
      followers: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/rutrut6969').then((res) => {
      this.setState({
        data: res.data,
        followersUrl: res.data.followers_url,
      });
    });
    axios
      .get(`https://api.github.com/users/${this.state.data.login}/followers`)
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      });
  }
  render() {
    return (
      <div className='app'>
        <UserCard state={this.state} />
      </div>
    );
  }
}

export default App;
