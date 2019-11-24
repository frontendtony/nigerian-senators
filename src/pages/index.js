import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import 'typeface-roboto';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SenatorsComponent from '../components/Senators';
import SEO from '../components/seo';
import '../css/index.css';
import senatorsList from '../data/senators.js';

const useStyles = makeStyles({
  main: {
    padding: '100px 0 50px'
  }
});

const IndexPage = () => {
  const [senators, setSenators] = React.useState(senatorsList);
  const [timeoutId, setTimeoutId] = React.useState(senatorsList);

  const classes = useStyles();

  const filter = value => {
    clearTimeout(timeoutId);

    if (value === '') {
      setSenators(senatorsList);
    } else {
      const id = setTimeout(() => {
        const data = senatorsList.filter(({ name, state }) => {
          const searchString = `${name}${state}`;
          return searchString.toLowerCase().includes(value);
        });
        setSenators(data);
      }, 500);
      setTimeoutId(id);
    }
  };

  return (
    <Layout>
      <SEO title='Home' />
      <header>
        <Navbar filter={e => filter(e.target.value.toLowerCase())} />
      </header>
      <main className={classes.main}>
        <Container fixed>
          <SenatorsComponent senators={senators} />
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
