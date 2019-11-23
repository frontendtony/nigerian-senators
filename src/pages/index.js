import React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import '../css/index.css';

const StyledPage = styled.div``;

const IndexPage = () => (
  <StyledPage>
    <SEO title='Home' />
    <main>
      <Navbar />
    </main>
  </StyledPage>
);

export default IndexPage;
