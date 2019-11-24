import { Container } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';
import Navbar from '../components/Navbar';
import SenatorsList from '../components/Senators';
import SEO from '../components/seo';
import '../css/index.css';
import senators from '../data/senators.js';

const StyledPage = styled.div``;

const IndexPage = () => (
  <StyledPage>
    <SEO title='Home' />
    <header>
      <Navbar />
    </header>
    <main>
      <Container fixed>
        <SenatorsList senators={senators} />
      </Container>
    </main>
  </StyledPage>
);

export default IndexPage;
