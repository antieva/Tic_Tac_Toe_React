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
      <div
         className="square"
         onClick={() => this.setState({value: 'X'})}>
        <style jsx>{`
          .square {
            width: 100px;
            height: 105px;
            border: 1px solid green;
            padding: 44px;
          }
      `}</style>
    {this.state.value}
  </div>
    );
  }
}

export default Square;
