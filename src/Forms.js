import React from 'react';
import axios from 'axios';

export class Forms extends React.Component {
    constructor(props){
        super(props);

        this.state = {userName: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
      
       event.preventDefault();
       console.log('Event; Form Submit', this.state.userName);

       axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({ userName: ''});
        });
    };
    render(){
        return (
           <form onSubmit = {this.handleSubmit}>
               <input type ="text" 
                    value = {this.state.userName}
                    onChange = {(event) => this.setState({ userName: event.target.value})}
                    placeholder = "Github username" required/>
               <button type = "submit">Add Card</button>
           </form>
        )
    }
}