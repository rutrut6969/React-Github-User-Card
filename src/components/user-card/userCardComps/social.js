import React from 'react';
export default function Social(props) {
  return (
    <section className='socialmedia'>
      <i className='fa fa-github fa-2x github' onClick={props.gotoGithub}></i>{' '}
      <i className='fa fa-linkedin fa-2x linkd' onClick={props.gotoLinkd}></i>
    </section>
  );
}
