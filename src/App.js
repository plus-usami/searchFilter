import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { CSSTransitionGroup } from 'react-transition-group';

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
      items: []
    }
  }

  filterList = (e) => {
    this.setState({items: this.state.initialItem})
    const updateList = this.state.initialItem.filter((item) => {
      return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updateList})
  }

  visibilityChange = () => {
    this.state.items == this.state.initialItem ? this.setState({items:[]}) :this.setState({items:this.state.initialItem})
  }

  render() {
    const commentStyle = {
      'color':'#444',
      
    }
    return (
      <div>
        <form action="">
          <input type="text" placeholder="search" onChange={this.filterList} style={{'padding':'10px','fontSize':'1rem','borderRadius':'5px'}}/>
        </form>
        <Button variant="contained" color="primary" onClick={this.visibilityChange} style={{'marginTop':'20px'}}>
          Show / Hide
        </Button>
        <div>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.items.map((item, index) => {
            return (
              <p style={commentStyle} key={index}>{item}</p>
            )
          })}
        </CSSTransitionGroup>

        </div>
      </div>
    );
  }
}

export default App;
