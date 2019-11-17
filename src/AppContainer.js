import { debitAction , creditAction } from './actions/action';
import App  from './App';
import { connect } from 'react-redux';
const mapStatetoProps = state => ({
    pAccountBalance : state.accountBalance
});
const mapDispatchToProps = {
    debit: debitAction,
    credit: creditAction
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);