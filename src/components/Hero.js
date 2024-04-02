import "./LoginStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="hero-text">
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;

// 전에 만들다가 아예 테마가 되어버린 hero 파일 ,, 파일을 깔끔하게 구분하려면 이 파일도 처리해야된다.
// 건드리면 signup 부분 이모지가 엄청 커져서 css 파일을 다시 손봐야할듯하다..
