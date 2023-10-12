import styled from 'styled-components';
import { LoadingMessageBox, RecommendLoadingContainer } from '../../components/RecommendLoading/style';
import { SuccessButtonBox } from '../../components/CardGame/style';

export const QuestionReocmmendPageContainer = styled(RecommendLoadingContainer)``;

export const QuestionRecommendMessageBox = styled(LoadingMessageBox)`
  h1 {
    span {
      font-size: 2.4rem;
      color: #fb4f00;
      font-weight: 600;
    }
  }
`;

export const QuestionRecommendButtonContainer = styled(SuccessButtonBox)``;
