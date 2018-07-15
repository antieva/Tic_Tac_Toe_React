import React from 'react';

function Square(props) {
  return (
    <div
      className="square"
      onClick={props.onClick}>
      <style jsx>{`
          .square {
            width: 100px;
            height: 105px;
            border: 1px solid green;
            padding: 44px;
          }
        `}</style>
      {props.value}
    </div>
  );
}

export default Square;
