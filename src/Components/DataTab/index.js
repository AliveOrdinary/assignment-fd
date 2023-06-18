import React from "react";
import { styled } from "styled-components";
import Skeleton from "react-loading-skeleton";

function DataTab({ users, error, loading }) {
  return loading ? (
    <StyledDataTab>
      {Array(6)
        .fill()
        .map((_, index) => (
          <StyledCard key={index}>
            <Skeleton height={16} width={120} />
            <Skeleton height={16} width={160} />
            <Skeleton height={16} width={160} />
            <Skeleton height={16} width={160} />
            <Skeleton height={16} width={160} />
            <Skeleton height={16} width={160} />
            <Skeleton height={16} width={160} />
            <Skeleton height={16} width={160} />
          </StyledCard>
        ))}
    </StyledDataTab>
  ) : users.length > 0 ? (
    <StyledDataTab>
      {users.map((user) => (
        <StyledCard key={user.id}>
          <StyledAvatar src={user.avatar} alt={user.first_name} />
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </StyledCard>
      ))}
    </StyledDataTab>
  ) : (
    <StyledContainer>
      {error ? <h1>{error}</h1> : <h1>Click on the button to get users</h1>}
    </StyledContainer>
  );
}

export default DataTab;

const StyledDataTab = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  padding: 2rem 6rem;
  justify-items: center;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem 2rem;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  min-width: 250px;

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

const StyledAvatar = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
  margin: auto;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: 2rem;
    color: #000;
  }
`;
