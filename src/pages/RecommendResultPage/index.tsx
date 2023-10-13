import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { RecommendData } from '../../atoms/atom';
import TableBar from '../../components/atoms/TableBar';
import * as S from './style';
import useModal from '../../hooks/useModal';
import MenuDetail from '../../components/MenuDetail';
import ArrowOpenIcon from '../../assets/ArrowOpenIcon';
import ShoppingBasket from '../../components/ShoppingBasket';
import { useRecoilState } from 'recoil';
import isOpenStore from '../../store/isOpen.store';
import ArrowCloseIcon from '../../assets/ArrowCloseIcon';
import { OrderPageContainer } from '../OrderPage/style';

const RecommendResultPage = () => {
  const recommendData = useRecoilValue(RecommendData);
  const navigate = useNavigate();
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useRecoilState(isOpenStore);

  useEffect(() => {
    if (recommendData[0].price === 0) return navigate('/recommend');
  }, [recommendData, navigate]);

  return (
    <>
      <TableBar name="메뉴추천" />
      <S.ReocmmendResultPageContainer>
        <S.RecommendResultMessageBox>
          <h1>
            이 <span>메뉴</span>는 어떠세요?
          </h1>
          <h2>고객님의 취향을 바탕으로 추천된 메뉴입니다</h2>
        </S.RecommendResultMessageBox>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
          <S.ResultBoxContainer>
            {recommendData.map((recommend) => (
              <S.ResultBox
                onClick={() => {
                  openModal({ component: <MenuDetail id={recommend.id} /> });
                }}
                key={recommend.id}
              >
                <S.ResultViewImgBox img_url={recommend.imageUrl} />
                <span>{recommend.foodName}</span>
                <span>{`${recommend.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')} 원`}</span>
              </S.ResultBox>
            ))}
          </S.ResultBoxContainer>
          <S.ResultButtonBoxContainer>
            <div className="fixed right-20 bottom-16 z-1 cursor-pointer" onClick={() => navigate('/order')}>
              돌아가기
            </div>
          </S.ResultButtonBoxContainer>
        </div>
        {!isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-24 cursor-pointer rounded-s-xl bg-orange1 fixed right-0 top-1/2 flex justify-center items-center"
          >
            <ArrowCloseIcon />
          </div>
        )}
        {isOpen && (
          <div className=" fixed cursor-pointer flex top-0 right-0 items-center">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" w-12 h-24 cursor-pointer rounded-s-xl bg-orange1 right-0 top-1/2 flex justify-center items-center"
            >
              <ArrowOpenIcon />
            </div>
            <ShoppingBasket />
          </div>
        )}
      </S.ReocmmendResultPageContainer>
    </>
  );
};

export default RecommendResultPage;
