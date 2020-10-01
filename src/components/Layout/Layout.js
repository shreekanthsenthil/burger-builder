import React, {Component} from 'react'
import {connect} from 'react-redux'

import Aux from '../../hoc/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {

        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render () { 
        return (
            <Aux>
            <div>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} isAuth={this.props.isAuthenticated}/>
                <SideDrawer isAuth={this.props.isAuthenticated} open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        )}
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout)
