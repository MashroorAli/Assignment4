import React, { Component } from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        {/*Will be imported to home to display account balance*/}
        Account Balance: {this.props.accountBalance}
      </div>
    );
  }
}

export default AccountBalance;