import React from 'react';
import './css/body.css';
//import PropTypes from 'prop-types';

//const App = () => <h1> Hello </h1>

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Name: 'Nick W. Bradford',
      temp: ''
    }
  }
  update (e){
    this.setState({txt: e.target.value})
  }
  render(){
    //let txt = this.props.txt
    let test = this.state.test
    let txt = this.state.txt
    return(
       <div class='body'>
        <div class='header-body'>
        <div class = 'menuBar-header-body popout'>
          <div class ='top-item-menuBar-header-body'></div>
          <div class ='item-menuBar-header-body'>First Test</div>
          <div class ='item-menuBar-header-body'>Second Test</div>
        </div>
          //<img class ='menuIcon-header-body' alt = 'Menu'src={('./pictures/menuIcon.png')} />
                  <Button><Heart />React</Button>
        </div>



        <h1>
          {this.state.cat} - {txt}
        </h1>
        <h2>
          -- {test}
        </h2>
        <Widget update={this.update.bind(this)} />
        <p>
          {this.state.test}
        </p>
{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <Button><Heart />React</Button>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      </div>
    )
    //return React.createElement('h1', null, 'Hello-World')
    // return (
    //   <div>
    //     <h1 className="">Hello World</h1>
    //     <b>Bold</b>
    //   </div>
    // )
  }
 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Button = (props) => <button>{props.children}</button>
class Heart extends React.Component {
  render(){
    return(
      <div>
        <span>&hearts;</span>
      </div>
    )
  }
}

const Image = (props) => <image>{props.children}</image>
class menu extends React.Component{
  render(){
    return(
      <div>
      <img class = 'menuIcon-header-body' scr='./pictures/menuIcon.png'></img>
      </div>
    )
  }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Widget = (props) =>
  <input type="text" onChange={props.update} />


//const App = () => <h1>Hi There!!!</h1>

// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: "This is the default txt"
// }


export default  App
