import { useEffect, useRef, useState } from 'react';
import TableBar from '../components/atoms/TableBar';
import { BlackCover, BlackCoverSuccessMessageBox, NotifyMessage, SuccessButtonBox } from '../components/CardGame/style';
import { useNavigate } from 'react-router-dom';

const FindWrongPicture = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas2Ref = useRef<HTMLCanvasElement>(null);
  const [time, setTime] = useState(30);
  const [isClicked, setIsClicked] = useState(false);
  const [startCount, setStartCount] = useState<number>(3);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [wrongPicture, setWrongPicture] = useState<{ flag: number; unit: number; sticker: number }>({
    flag: 1,
    unit: 1,
    sticker: 1,
  });

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const canvas2 = canvas2Ref.current;
    if (!canvas) return;
    if (!canvas2) return;

    let x;
    let y;

    const context = canvas.getContext('2d');
    const context2 = canvas2.getContext('2d');
    if (!context) return;
    if (!context2) return;

    const rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;

    if (x > 373) {
      const rect = canvas2.getBoundingClientRect();
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    context.beginPath();
    context2.beginPath();

    const imgElem = new Image();
    const imgElem2 = new Image();
    if (x >= 68 && x <= 105 && y >= 363 && y <= 396) {
      imgElem.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png';
      imgElem2.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png';
      context.drawImage(imgElem, 68, 363, 30, 30);
      context2.drawImage(imgElem2, 68, 363, 30, 30);
      wrongPicture.flag && setWrongPicture((prev) => ({ ...prev, flag: 0 }));
    } else if (x >= 303 && x <= 323 && y >= 214 && y <= 240) {
      imgElem.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png';
      imgElem2.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png';
      context.drawImage(imgElem, 303, 214, 30, 30);
      context2.drawImage(imgElem, 303, 214, 30, 30);
      wrongPicture.unit && setWrongPicture((prev) => ({ ...prev, unit: 0 }));
    } else if (x >= 321 && x <= 341 && y >= 402 && y <= 424) {
      imgElem.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png';
      imgElem2.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png';
      context.drawImage(imgElem, 319, 406, 30, 30);
      context2.drawImage(imgElem, 319, 406, 30, 30);
      wrongPicture.sticker && setWrongPicture((prev) => ({ ...prev, sticker: 0 }));
    } else {
      imgElem.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png';
      imgElem2.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png';
      context.drawImage(imgElem, x - 15, y - 15, 30, 30);
      context2.drawImage(imgElem2, x - 15, y - 15, 30, 30);
      setTime((prev) => prev - 1);
    }

    console.log(x, y);

    context.fill();
    context2.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvas2 = canvas2Ref.current;
    if (!canvas) return;
    if (!canvas2) return;

    // Canvas 초기화 등 추가 설정 작업
  }, []);

  const clickedBlackCover = () => {
    setIsClicked(true);
    setInterval(() => {
      setStartCount((prev) => prev - 1);
    }, 1000);
  };

  useEffect(() => {
    if (startCount === 0) {
      setIsBeginning(false);
    }
  }, [startCount]);

  useEffect(() => {
    if (!isBeginning) {
      setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
  }, [isBeginning]);

  useEffect(() => {
    if (time < 0) {
      setTime(0);
    }
  }, [time]);

  const navigate = useNavigate();

  const isCorrect = Object.values(wrongPicture).reduce((sum: any, obj: number) => sum + obj, 0) === 0;

  return (
    <>
      <TableBar name={isBeginning || time <= 0 || isCorrect ? `깜짝게임` : `${time}초`} />
      {isBeginning && (
        <BlackCover onClick={() => !isClicked && clickedBlackCover()}>
          {isClicked ? (
            <>
              <h1 className="noselect">잠시 뒤 게임이 시작됩니다</h1>
              <h1>{startCount}</h1>
            </>
          ) : (
            <h1 className="noselect">시작하려면 화면 아무 곳을 눌러주세요</h1>
          )}
        </BlackCover>
      )}
      {isCorrect && time > 0 && (
        <BlackCover>
          <BlackCoverSuccessMessageBox>
            <h1>PERPECT!</h1>
            <h1>진로가 주는 서비스를 받아가세요!</h1>
            <SuccessButtonBox>
              <div onClick={() => navigate('/order')}>돌아가기</div>
              <div>직원호출</div>
            </SuccessButtonBox>
          </BlackCoverSuccessMessageBox>
        </BlackCover>
      )}

      {!isCorrect && time <= 0 && (
        <BlackCover>
          <BlackCoverSuccessMessageBox>
            <h1>GAME OVER..</h1>
            <h1>다음 기회를 노려보세요..!</h1>
            <SuccessButtonBox>
              <div onClick={() => navigate('/order')}>돌아가기</div>
            </SuccessButtonBox>
          </BlackCoverSuccessMessageBox>
        </BlackCover>
      )}
      {!isBeginning && startCount === 0 && time !== 0 && (
        <NotifyMessage>
          <h1>시작</h1>
        </NotifyMessage>
      )}

      <div className="px-20 h-full pt-[30px]">
        <header>
          <div className="text-[40px] text-black font-bold noselect">
            다른 곳 <span className="text-orange1">3개를</span>
            찾으세요!
          </div>
          <div className="flex justify-between">
            <div className="font-medium text-[28px] text-black text-medium noselect">틀린 그림을 찾아 눌러보세요 !</div>
            <div className="font-medium text-[24px] text-black text-medium noselect">
              정답이 아닌 곳을 클릭하면 1초 감소합니다
            </div>
          </div>
          <div className="text-right text-[30px] text-black font-bold noselect">
            남은 그림 수 {Object.values(wrongPicture).reduce((sum: any, obj: any) => (sum += obj), 0)}개
          </div>
        </header>
      </div>
      <div className="flex justify-between gap-5 h-full mx-auto">
        <canvas
          width={373}
          height={520}
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="ml-auto bg-[length:100%_100%] bg-[url('/public/correct.png')] cursor-pointer"
        ></canvas>
        <canvas
          ref={canvas2Ref}
          width={373}
          height={520}
          onClick={handleCanvasClick}
          className="mr-auto bg-[length:100%_100%] bg-[url('/public/wrong.png')] cursor-pointer"
        ></canvas>
      </div>
    </>
  );
};

export default FindWrongPicture;
