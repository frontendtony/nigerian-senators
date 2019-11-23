import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import '../css/index.css';

const StyledPage = styled.div``;

const IndexPage = () => (
  <StyledPage>
    <SEO title='Home' />
    <main>Test</main>
  </StyledPage>
);

export default IndexPage;
