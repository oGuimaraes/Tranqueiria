import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Text extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.newValue}</h1>
            </React.Fragment>
        )
    }
}
const mapStateToProps = store => { 
    return({
    newValue: store.clickState.newValue
  });
  }

export default connect(mapStateToProps) (Text)
