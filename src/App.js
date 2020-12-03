import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import { useDispatch } from 'react-redux'

const  App = ({value, onIncreaseClick, onDecreaseClick, onResetClick}) => {
    const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
              <span>{value}</span>
              <p/>
              {/* Don't use mapDispatchToProps */}
              <button onClick={ () => {dispatch({type: 'increase'})}}>Increase</button>
              {/* Use mapDispatchToProps */}
              <button onClick={onDecreaseClick}>Decrease</button>
              <button onClick={onResetClick}>Reset</button>
          </div>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
