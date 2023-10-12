import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardData } from '../../assets/db/cardData';
import * as S from './style';

const CardGame = () => {
  const [beginning, setBeginning] = useState<boolean>(true); // 처음인가? (검은화면을 보여줘야 되는가)
  const [isClicked, setIsClicked] = useState(false); // 화면 아무 곳을 눌렀나?
  const [startMessage, setStartMessage] = useState('시작하려면 화면 아무 곳을 눌러주세요');
  const [startCount, setStartCount] = useState<number>(3);
  const [notifyCount, setNotifyCount] = useState<number>(1);
  const [isGGwang, setIsGGwang] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const navigate = useNavigate();

  const clickedBlackCover = () => {
    if (isClicked) return;

    setIsClicked(true);
    setStartMessage('잠시 뒤 게임이 시작합니다');
    setStartCount((prev) => prev - 1);
  };

  useEffect(() => {
    if (startCount !== 0 && isClicked) {
      setTimeout(() => {
        setStartCount((prev) => prev - 1);
      }, 1000);
    } else if (startCount === 10) return;

    if (startCount === 0) {
      setBeginning(false);
      setStartCount(0);
    }
  }, [startCount, isClicked]);

  useEffect(() => {
    if (isSuccess && notifyCount !== 0) {
      setTimeout(() => {
        setNotifyCount((prev) => prev - 1);
      }, 1000);
    } else if (notifyCount !== 0 && !beginning) {
      setTimeout(() => {
        setNotifyCount((prev) => prev - 1);
      }, 1000);
    }
  }, [notifyCount, beginning]);

  return (
    <S.CardGameContainer>
      {beginning && (
        <S.BlackCover onClick={clickedBlackCover}>
          <h1>{startMessage}</h1>
          {isClicked && <h1>{startCount}</h1>}
        </S.BlackCover>
      )}

      {isSuccess && notifyCount === 0 && (
        <S.BlackCover>
          <S.BlackCoverSuccessMessageBox>
            <h1>PERPECT!</h1>
            <h1>진로가 주는 서비스를 받아가세요!</h1>
            <S.SuccessButtonBox>
              <div onClick={() => navigate('/order')}>돌아가기</div>
              <div>직원호출</div>
            </S.SuccessButtonBox>
          </S.BlackCoverSuccessMessageBox>
        </S.BlackCover>
      )}

      {isGGwang && notifyCount === 0 && (
        <S.BlackCover>
          <S.BlackCoverSuccessMessageBox>
            <h1>GAME OVER..</h1>
            <h1>다음 기회를 노려보세요..!</h1>
            <S.SuccessButtonBox>
              <div onClick={() => navigate('/order')}>돌아가기</div>
            </S.SuccessButtonBox>
          </S.BlackCoverSuccessMessageBox>
        </S.BlackCover>
      )}

      {!beginning && startCount === 0 && notifyCount !== 0 && (
        <S.NotifyMessage>
          <h1>시작</h1>
        </S.NotifyMessage>
      )}

      {!beginning && isSuccess && notifyCount !== 0 && (
        <S.NotifyMessage>
          <h1>PERFECT!</h1>
        </S.NotifyMessage>
      )}

      {!beginning && isGGwang && notifyCount !== 0 && (
        <S.NotifyMessage>
          <h1>GAME OVER..</h1>
        </S.NotifyMessage>
      )}

      <S.CardGameTitleBox>
        <h1>
          카드를 선택해서 <span>에이스를</span> 찾으세요!
        </h1>
        <span>섞여있는 카드 속 두꺼비를 찾아내세요!</span>
      </S.CardGameTitleBox>
      <S.CardsBox>
        {cardData.map((card) => (
          <img
            key={card.id}
            src={isGGwang || isSuccess ? card.img : '/BackJinroCard.png'}
            alt="카드"
            onClick={() => {
              if (!isGGwang || !isSuccess) {
                setNotifyCount(1);
                setStartCount(10);
                if (card.isAnswer && notifyCount === 0) setIsSuccess(true);
                else if (!card.isAnswer && notifyCount === 0) setIsGGwang(true);
              } else {
                return;
              }
            }}
          />
        ))}
      </S.CardsBox>
    </S.CardGameContainer>
  );
};

export default CardGame;
