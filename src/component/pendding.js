import React, { Component } from 'react'
import TodoItm from './TodoItm';
import { connect } from 'react-redux'
 class Pendding extends Component {
     constructor(props) {
         super()
         this.state = {

         }
    }
     render() {
        console.log(this.props.state)
        return (
            <div>
                {
                    this.props.state.pendding.map((value) => {
                        return <TodoItm data={value}/>
                    })
                }
            </div>
        )
    }
}


function mapStateToProps(routerReducer) {
    return {
        state:routerReducer.Todoist
    }
}


export default connect(mapStateToProps)(Pendding)