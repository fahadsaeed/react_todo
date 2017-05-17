import React from 'react';

class AddTodo extends React.Component {

    constructor(props){
        super();
        this.props = props;
        this.add = this.add.bind(this);
    }

    add(e){
       let text = this.refs.input.value;
        if(text){
            this.props.addList(text);
            this.refs.input.value = "";
        }
    }

    render() {
        return (
            <div>
                <input ref="input" type="text"/>
                <button type="submit" onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default AddTodo;