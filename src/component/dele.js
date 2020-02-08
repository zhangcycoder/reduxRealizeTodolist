import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItm from './TodoItm';

 class Dele extends Component {
    render() {
        return (
            <div>
                  {
                    this.props.state.delete.map((value) => {
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


export default connect(mapStateToProps)(Dele)