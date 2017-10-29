import React, { Component } from 'react'; 
import { Link } from 'react-router'; 
import { connect } from 'react-redux'; 
import * as actions from '../actions';

class Header extends Component {

    authButton(){
        if(!this.props.authenticated){
            return <button onClick={ () => this.props.authenticate(true)} >Sign in</button>
        }

        return <button onClick={ () => this.props.authenticate(false)} >Sign out</button>
        
    }

    render() {

        return(
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>


            </nav>
        )
    }
}

const mapStateToProps = ({authenticated}) => {

    return{
        authenticated
    }

}
 
export default connect(mapStateToProps, actions )(Header); 