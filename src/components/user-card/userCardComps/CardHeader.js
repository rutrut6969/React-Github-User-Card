import React from 'react';

export default function CardHeader(props) {
  return (
    <section className='cardHeader'>
      <section className='headWrap'>
        <h2>{props.state.data.name} </h2>
        <h6>{props.state.data.login}</h6>
      </section>
      <p className='followers'>
        Followers: {props.state.data.followers} Following:{' '}
        {props.state.data.following}
      </p>
      <div className='img'>
        <img
          src={props.state.data.avatar_url}
          alt={props.state.data.login}
          style={props.style.img}
        />
      </div>
    </section>
  );
}
