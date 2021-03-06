import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
  query: { name?: string };
}

const Home: NextPage<Props> = ({ query }) => {
  const greetName = query.name ? query.name : 'World';

  return (
    <div>
      <h1>Hello, {greetName}!</h1>
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  const query = {
    name: ctx.query.name || null,
  };
  return { props: { query } };
}

export default Home;
