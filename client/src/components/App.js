import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

import { AppContext } from './AppContext';

const App = () => {
  const {} = useContext(AppContext);

  return (
    <StyledPageWrapper>
      <StyledHeader>
        <button>Sign In</button>
      </StyledHeader>
      <StyledContainer></StyledContainer>
    </StyledPageWrapper>
  );
};

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.nav`
  background: #eaeaea;
  padding: 6px 14px;
  min-height: 48px;
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const StyledContainer = styled.div`
  background: #fafafa;
  min-height: 400px;
  padding: 14px;
`;

export default App;
