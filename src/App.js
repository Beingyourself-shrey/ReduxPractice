import React from 'react';
import logo from './logo.svg';
import './App.css';
import { debitAction , creditAction } from './actions/action';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {userInputAmt:0};
    render() {
        return (<div>
        <div className={'col-5 offset-1 card'}>
            <br/>
            <table>
                <tbody>
                    <tr>
                        <th><h3>Your account has: </h3></th>
                        <td><h3>{'$'+this.props.pAccountBalance.accountBalance}</h3></td>
                    </tr>
                    <tr>
                        <th>Enter the amount for transaction: </th>
                        <td><input onChange={(e)=>{ this.userInputAmt = e.target.value;}} type='number' className={'form-control'}/></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>{this.props.debit(this.userInputAmt)}} className={'btn btn-primary'}>
                                Debit </button>
                        </td>
                        <td>
                            <button onClick={()=>{this.props.credit(this.userInputAmt)}} className={'btn btn-success'}>
                                Credit </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </div>
        {JSON.stringify(this.props.pAccountBalance)}
        </div>);
}
}
const mapStatetoProps = state => ({
  pAccountBalance : state
});
const mapDispatchToProps = {
  debit: debitAction,
  credit: creditAction
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);
