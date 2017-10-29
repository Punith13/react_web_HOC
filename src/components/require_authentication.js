import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

 
export default (ComposedComponent) => {

    class Authentication extends Component{

        static contextTypes = {
            router : React.PropTypes.object
        }
        
        componentWillMount() {
            if(!this.props.authenticated){
                this.context.router.push("/");
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push("/");
            }
        }

        render(){  
            console.log(this.context); 
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = ({authenticated}) => {
        return{
            authenticated
        }
    }

    return connect(mapStateToProps)(Authentication);
}




// In some other location .. Not in this file .. 
// We want to use this HOC 
// import Authentication from Authentication
// import Resource from Resources 

// const ComposedComponent = Authentication(Resources); 

// In some render method 
// <ComposedComponent resources={resourceList}/>