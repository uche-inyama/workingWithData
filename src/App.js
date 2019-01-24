
import React from 'react';
import { CardList } from './CardList';
import { Forms } from './Forms';

export class App extends React.Component{
     constructor(props){
         super(props);
         this.state = {
            cards: [
               
            ]
        };
     }

        addNewCard =(cardInfo) => {
          this.setState(prevState => ({
              cards: prevState.cards.concat(cardInfo)
          }));
        };
    
      render(){
        return (
            <div> 
               
               <Forms  onSubmit = {this.addNewCard}/>
                <CardList  cards = {this.state.cards}/>
                
            </div>
        )
    }
}

