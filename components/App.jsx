import React from 'react';
import Header from './Header/Header.jsx';

const Test = (props) => {
    return(
        <div>
        State less component -{props.stateLess}
        </div>
    )
};

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            name : 'testing'
        };
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(){
        this.setState({
            name : 'update values'
        })
    }

    render() {
        return (
            <div>
                <Test stateLess="state less props testing "></Test>
                <Header name={this.state.name}></Header>
                Hello World!!!
                <button onClick={this.clickEvent}>Click</button>
        </div>
    );
    }
}

export default App;