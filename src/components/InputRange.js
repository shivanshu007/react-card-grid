import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
 
class InputRangeComponent extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 200, max: 400 },
    };
  }
 
  render() {
    return (
        <>
            <InputRange
                maxValue={700}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })} 
            />
            <input type="submit" onClick={this.props.handleTotalFilter(this.state.value.min,this.state.value.max)}/>
        </>
    );
  }
}
 
export default InputRangeComponent;