import styled from 'styled-components';

export const BodyLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TodoList = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 40%;
  max-height: 100%;
  padding: 2rem;
  gap: 1rem;
  overflow: auto;
`;

export const FormLayout = styled(TodoList)`
  width: 100%;
  padding: 1rem;
`;
export const Article = styled.article`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 60%;
  max-height: 100%;
`;

export const ArticleTitle = styled.span`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ArticleContent = styled.span`
  padding: 0.2rem;
  height: 100%;
  overflow: auto;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  > button {
    margin: 1rem;
  }
`;

export const FabWrapper = styled.div`
  margin-left: auto;
  margin-right: -1rem;
`;
