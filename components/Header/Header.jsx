import React from 'react';


class Header extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }


    render(){
        return (
            <div>Header - {this.props.name}</div>
        );
    }
}

export default Header;