import React, { Component } from 'react'

class SingleDorama extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <p>Single Doramas - the show id will be {this.props.match.params.id}</p>
            </div>
        )
    }
}
export default SingleDorama;
