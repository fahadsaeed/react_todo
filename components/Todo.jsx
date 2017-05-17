import React from 'react';
import AddTodo from './AddTodo.jsx';

class Todo extends React.Component {

    constructor(){
        super();
        this.state = {
            lists : []
        };
    }

    add(text){
        console.log(this.state.lists);

         this.state.lists.push(text);
        this.setState({lists : this.state.lists});
        console.log(this.state.lists)

    }



    render() {
        return (
            <div>
              <h1>React Todo</h1>
               <AddTodo addList={this.add.bind(this)}></AddTodo>

           <ul>
               {
                   this.state.lists.map((list, i)=>{
                       return (
                           <li key={i}>{list}</li>
                       )
                   })
               }

           </ul>

            </div>
        );
    }
}

export default Todo;