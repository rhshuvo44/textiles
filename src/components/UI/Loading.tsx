const Loading = () => {
  return (
    <div className="se-pre-con">
      <div className="preloader-wrapper">
        <div
          className="preloader"
          style={{
            background: 'url("../public/favicon.ico") no-repeat center',
          }}
        ></div>
        <div className="preloader2"></div>
      </div>
    </div>
  );
};

export default Loading;
