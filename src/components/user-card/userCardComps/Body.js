import React from 'react';
export default function Body(props) {
  return (
    <section className='body'>
      <div className='bio'>
        <h4>Bio:</h4>
        <p className='bioBody'>{props.state.data.bio}</p>
      </div>
      <div className='company'>
        <h4>{props.state.data.company}:</h4>
        <p className='compDesc'>
          My company has a dream inspired by the marijuana industry!
        </p>
      </div>
    </section>
  );
}
