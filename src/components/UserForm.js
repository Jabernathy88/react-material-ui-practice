import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step+1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step-1
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const { step } = this.state
    const { firstName, lastName, email, occupation, city, bio } = this.state
    const values = { firstName, lastName, email, occupation, city, bio }

    switch(step) {
      case 1:
        return (
          <div>FormUserDetails</div>
          // <FormUserDetails 
          //   nextStep={this.nextStep}
          //   handleChange={this.handleChange}
          //   values={this.values}
          // />
        )
      case 2:
        return (
          <div>FormPersonalDetails</div>
        )
      case 3:
        return (
          <div>Confirm</div>
        )
      case 4:
        return (
          <div>Success</div>
        )
    }
  }
}

export default UserForm