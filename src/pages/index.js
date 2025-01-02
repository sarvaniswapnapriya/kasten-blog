import React from 'react';
import { Redirect } from '@docusaurus/router'; // Import Redirect from @docusaurus/router


const Home = () => {
  return <Redirect to="/docs/blog" />;
};

export default Home;
