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
      visibility:false
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
    this.state.visibility === true ? this.setState({visibility:false}) :    this.setState({visibility:true});
  }

  render() {
    const commentStyle = {
      'color':'#444',
    }

    let visibilityStyle = {};

    {(() => {
        this.state.visibility ? visibilityStyle = {'display':'block'} : visibilityStyle = {'display':'none'};
    })()}

    return (
      <div>
        <form action="">
          <input type="text" placeholder="search" onChange={this.filterList} style={{'padding':'10px','fontSize':'1rem','borderRadius':'5px'}}/>
        </form>
        <Button variant="contained" color="primary" onClick={this.visibilityChange} style={{'marginTop':'20px'}}>
          Show / Hide
        </Button>
        <div style={visibilityStyle}>
          {this.state.items.map((item, index) => {
            return (
              <p style={commentStyle} key={index}>{item}</p>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
