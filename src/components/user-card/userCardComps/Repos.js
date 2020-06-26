import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Repos(props) {
  const repoUrl = props.state.data.repos_url;
  const [repo, setRepo] = useState({
    repos: {},
  });
  console.log(repoUrl);
  useEffect(() => {
    axios.get(`${repoUrl}`).then((res) => {
      console.log(res);
    });
  }, []);

  return <section className='repos'></section>;
}
