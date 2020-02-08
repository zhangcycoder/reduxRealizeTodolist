import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItm from './TodoItm'
 class Finish extends Component {
     render() {
        console.log(this.props.state)
        return (
            <div>
 {
                    this.props.state.finish.map((value) => {
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


export default connect(mapStateToProps)(Finish)