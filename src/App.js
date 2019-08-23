import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor() {
    super()
    this.state = {
      initialItem: [
        "apple",
        "tree",
        "pen",
        "mike",
        "dog",
        "cat",
        "iphone",
        "book"
      ],
      items: [],
      visibility:true
    }
  }

  componentDidMount() {
    this.setState({items: this.state.initialItem})
  }

  filterList = (e) => {
    const updateList = this.state.initialItem.filter((item) => {
      return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updateList})
  }

  visibilityChange = () => {
    this.state.visibility == true ? this.setState({visibility:false}) :    this.setState({visibility:true});
  }

  visibilityStyle = "";

  if( this.state.visibility == true){
    visibilityStyle = {'display':'block'}
  } else {
    visibilityStyle = {'display':'none'}
  }

  render() {

    return (
      <div>
        <form action="">
          <input type="text" placeholder="search" onChange={this.filterList}/>
        </form>
        <div style={visibilityStyle}>
          {this.state.items.map((item, index) => {
            return (
              <p style={commentStyle} key={index}>{item}</p>
            )
          })}
        </div>
        <Button variant="contained" color="primary" onClick={this.visibilityChange}>
          Show/Hide
        </Button>
      </div>
    );

    const commentStyle = {
      'color':'#444',
    }

  }
}

export default App;
