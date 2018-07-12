import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        <style jsx>{`
          .square {
            width: 100px;
            height: 100px;
          }
      `}</style>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
