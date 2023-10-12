import * as S from './style';

const RecommendLoading = () => {
  return (
    <S.RecommendLoadingContainer>
      <S.LoadingMessageBox>
        <img src="/Character.png" alt="우리의 마스코트" />
        <h1>메뉴를 추천하는 중이에요!</h1>
        <span>시간이 다소 소요될 수 있습니다</span>
        <S.Loading />
      </S.LoadingMessageBox>
    </S.RecommendLoadingContainer>
  );
};

export default RecommendLoading;
