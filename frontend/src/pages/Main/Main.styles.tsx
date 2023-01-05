import styled from 'styled-components';

export const BodyLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TodoList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 16rem;
  gap: 1rem;
`;

export const FormLayout = styled(TodoList)`
  width: 100%;
  padding: 1rem;
`;
export const Article = styled.article`
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 25rem;
`;

export const ArticleTitle = styled.span`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ArticleContent = styled.span``;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  > button {
    margin: 1rem;
  }
`;

export const FabWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 0.5rem;
`;
