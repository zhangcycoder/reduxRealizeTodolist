import React, { Component } from 'react'
import {AddToFinish, AddFinish_Pendding, Add_Delete, Add_recover} from '../redux/TodoAction'
import {connect } from 'react-redux'
 class TodoItm extends Component {
    constructor(props) {
        super()
        this.state = {
            checked:false,
            content: '',
            current:""
        }
    }

    render() {
        return (
            <div>
                <div className="TodoItms">
                    <div className="TodoItms_checked">
                        <input type="checkbox" checked={this.state.checked}
                            onClick={() => {
                                // console.log(this.state.current,'2222222222222222222222222222222222222222222222222222222')
                                if (this.state.checked&&this.state.current==='finish') {
                                    this.props.toPendding(this.state)
                                } else if(!this.state.checked&&this.state.current==='pendding') {
                                    this.props.value(this.state)
                                } else if (this.state.current === 'delete') {
                                    this.props.ogiginal(this.state)
                                }
                                
                            }}
                        />
                    </div>
                    <div className="TodoItms_content">{this.state.content}</div>
                    <div className="TodoItms_delete">
                        <button className="TodoItms_delete_this"
                            onClick={()=>{this.props.delete(this.state)}}
                        >
                            删除
                        </button>
                    </div>
                </div>
            </div>
        )
    }

     componentDidMount() {
         this.setState({
            checked:this.props.data.checked,
            content: this.props.data.content,
            current:this.props.data.current
         })
     }
     componentWillReceiveProps(props) {
         this.props = props;
         this.setState({
            checked:this.props.data.checked,
            content: this.props.data.content,
            current:this.props.data.current
         })
     }
}


function mapStateToProps(rooterReducer) {
    return {
        state:rooterReducer.Todoist
    }
}

function mapActionToProps(dispatch) {
    return {
        value: (value) => dispatch(AddToFinish(value)),
        toPendding: (value) => dispatch(AddFinish_Pendding(value)),
        delete: (value) => dispatch(Add_Delete(value)),
        ogiginal:(value) => dispatch(Add_recover(value))
    }
}
export default connect(mapStateToProps,mapActionToProps)(TodoItm)