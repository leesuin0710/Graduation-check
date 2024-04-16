import React from 'react';
import './Courselist.css'; // Import CSS file
const CourseList = () => {
  return (
    <div className="BoxWrapping">
      <div>
        <h3>수강과목 리스트</h3>
        <div className="LineWrapper">
          <div className="Line">
            <span className="RowText">Row1</span>
          </div>
          <div className="Line">
            <span className="RowText">Row2</span>
          </div>
          <div className="Line">
            <span className="RowText">Row3</span>
          </div>
          <div className="Line">
            <span className="RowText">Row4</span>
          </div>
          <div className="Line">
            <span className="RowText">Row5</span>
          </div>
          <div className="Line">
            <span className="RowText">Row6</span>
          </div>
          <div className="Line">
            <span className="RowText">Row7</span>
          </div>
        </div>
      </div>
      <div className="Col" style={{ right: '350px' }}>
        <div>Col2</div>
      </div>
      <div className="Col" style={{ right: '200px' }}>
        <div>Col3</div>
      </div>
    </div>
  );
};

export default CourseList;




















