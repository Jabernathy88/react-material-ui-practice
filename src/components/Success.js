import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
  back = event => {
    event.preventDefault()
    this.props.prevStep()
  }

  render() {

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success!" />
          <br />
          <h3>Thank you for your response.</h3>
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Confirm