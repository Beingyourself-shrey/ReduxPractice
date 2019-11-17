import React from 'react';
import logo from './logo.svg';
import './App.css';
import { debitAction, creditAction, loginAction } from './actions/action';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    userInputAmt: 0,
    user: {
      userName: "",
      password: ""
    }
  };
  changeHandler = (e) => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    
    this.setState({ user: user })
  }
  handleSubmit = () => {
    this.props.user(this.state.user)
  }
  render() {
    return (<div>
      <div className={'col-5 offset-1 card'}>
        <br />
        <table>
          <tbody>
            <tr>
              <th><h3>Your account has: </h3></th>
              <td><h3>{'$' + this.props.pAccountBalance.accountBalance}</h3></td>
            </tr>
            <tr>
              <th>Enter the amount for transaction: </th>
              <td><input onChange={(e) => { this.userInputAmt = e.target.value; }} type='number' className={'form-control'} /></td>
            </tr>

            <tr>
              <th>Enter userName </th>
              <td><input name="userName" onChange={this.changeHandler} className={'form-control'} /></td>
            </tr>
            <tr>
              <th>Enter password </th>
              <td><input name="password" onChange={this.changeHandler} className={'form-control'} /></td>
            </tr>
            <tr>
              <td>
              <input type="button" onClick={this.handleSubmit} value="Login"/>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={() => { this.props.debit(this.userInputAmt) }} className={'btn btn-primary'}>
                  Debit </button>
              </td>
              <td>
                <button onClick={() => { this.props.credit(this.userInputAmt) }} className={'btn btn-success'}>
                  Credit </button>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
      {'Global state: '+JSON.stringify(this.props.pAccountBalance)}
      {'Local state: '+JSON.stringify(this.state)}
     
    </div>);
  }
}
const mapStatetoProps = state => ({
  pAccountBalance: state
});
const mapDispatchToProps = {
  user: loginAction,
  debit: debitAction,
  credit: creditAction
}
export default connect(mapStatetoProps, mapDispatchToProps)(App);
