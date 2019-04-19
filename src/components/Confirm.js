import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui';

export class Confirm extends Component {
  continue = event => {
    event.preventDefault()
    this.props.nextStep()
  }

  back = event => {
    event.preventDefault()
    this.props.prevStep()
  }

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Personal details" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={ firstName }
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={ lastName }
            />
            <ListItem
              primaryText="Email"
              secondaryText={ email }
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={ occupation }
            />
            <ListItem
              primaryText="City"
              secondaryText={ city }
            />
            <ListItem
              primaryText="Bio"
              secondaryText={ bio }
            />
          </List>

          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm!"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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