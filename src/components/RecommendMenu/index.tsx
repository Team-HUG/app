import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { instance } from '../../api';
import { RecommendData } from '../../atoms/atom';
import RecommendLoading from '../RecommendLoading';
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
  const [isLoading, setIsLoading] = useState(false);
  const setRecommendData = useSetRecoilState(RecommendData);
  const navigate = useNavigate();

  const onGPT = async () => {
    if (recommendArr.some((recommend) => recommend.length === 0))
      return toast.warning('선호하는 것을 모두 선택해주세요');
    setIsLoading(true);

    try {
      const { data } = await instance.post('/api/food/recommend/food', {
        taste: recommendArr[0],
        texture: recommendArr[1],
        staple: recommendArr[2],
        temperature: recommendArr[3],
      });

      setRecommendData(data);
      navigate('/recommend-result');
      toast.success('추천 메뉴를 구했습니다');
    } catch (e) {
      toast.error('오류가 발생했습니다');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <RecommendLoading />
      ) : (
        <S.RecommendMenuContainer>
          <S.RecommendMenuSelectContainer>
            {recommendData.map((recommend, idx) => (
              <div key={idx}>
                <S.RecommendQuestion>
                  {recommend.question === '선호하는 맛을 선택해주세요' ? (
                    <h1>
                      {recommend.question.slice(0, 5)}
                      <span>맛</span>
                      {recommend.question.slice(6)}
                    </h1>
                  ) : (
                    <h1>
                      {recommend.question.slice(0, 5)}
                      <span>{recommend.question.slice(5, 7)}</span>
                      {recommend.question.slice(7)}
                    </h1>
                  )}
                </S.RecommendQuestion>
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
          <S.RecommendMenuButtonContainer>
            <div>돌아가기</div>
            <div onClick={onGPT}>분석 시작</div>
          </S.RecommendMenuButtonContainer>
        </S.RecommendMenuContainer>
      )}
    </>
  );
};

export default RecommendMenu;
