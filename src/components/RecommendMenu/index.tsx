import { useState } from 'react';
import * as S from './style';

const recommendData = [
  { question: '선호하는 맛을 선택해주세요', recommendList: ['달콤한', '짭짤한', '고소한', '매콤한', '담백한'] },
  { question: '선호하는 식감을 선택해주세요', recommendList: ['부드러운', '바삭한', '눅눅한', '꾸덕한', '쫄깃한'] },
  { question: '선호하는 주식을 선택해주세요', recommendList: ['밥', '고기', '면'] },
  { question: '선호하는 온도를 선택해주세요', recommendList: ['차가운', '따뜻한'] },
];

const RecommendMenu = () => {
  const [recommendArr, setRecommendArr] = useState(['', '', '', '']);
  const [tasteText, setTasteText] = useState('');
  const [textureText, setTexture] = useState('');
  const [stockText, setStockText] = useState('');
  const [temperatureText, setTemperatureText] = useState('');

  return (
    <S.RecommendMenuContainer>
      <S.RecommendMenuSelectContainer>
        {recommendData.map((recommend, idx) => (
          <div key={idx}>
            <S.RecommendQuestion>{recommend.question}</S.RecommendQuestion>
            <S.RecommendSelectBoxContainer>
              {recommend.recommendList.map((in_recommend, idx) => (
                <S.RecommendSelectBox
                  key={idx}
                  current={in_recommend}
                  clicked={
                    recommend.question === '선호하는 맛을 선택해주세요'
                      ? tasteText
                      : recommend.question === '선호하는 식감을 선택해주세요'
                      ? textureText
                      : recommend.question === '선호하는 주식을 선택해주세요'
                      ? stockText
                      : temperatureText
                  }
                  onClick={() => {
                    if (recommend.question === '선호하는 맛을 선택해주세요') {
                      setTasteText(in_recommend);
                      const copyTextArr = [...recommendArr];
                      copyTextArr[0] = in_recommend;
                      setRecommendArr(copyTextArr);
                    }
                    if (recommend.question === '선호하는 식감을 선택해주세요') {
                      setTexture(in_recommend);
                      const copyTextArr = [...recommendArr];
                      copyTextArr[1] = in_recommend;
                      setRecommendArr(copyTextArr);
                    }
                    if (recommend.question === '선호하는 주식을 선택해주세요') {
                      setStockText(in_recommend);
                      const copyTextArr = [...recommendArr];
                      copyTextArr[2] = in_recommend;
                      setRecommendArr(copyTextArr);
                    }
                    if (recommend.question === '선호하는 온도를 선택해주세요') {
                      setTemperatureText(in_recommend);
                      const copyTextArr = [...recommendArr];
                      copyTextArr[3] = in_recommend;
                      setRecommendArr(copyTextArr);
                    }
                  }}
                >
                  {in_recommend}
                </S.RecommendSelectBox>
              ))}
            </S.RecommendSelectBoxContainer>
          </div>
        ))}
      </S.RecommendMenuSelectContainer>
      <S.RecommendButton>분석 시작</S.RecommendButton>
    </S.RecommendMenuContainer>
  );
};

export default RecommendMenu;
