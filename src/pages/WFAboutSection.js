import React from 'react';
import { client } from '../client';
import VSAboutSectionPost from './datalayer/WFAboutSectionPost';

class WFAboutSection extends React.Component {
    state = {
        Abouts: []
    }
    servercall =()=>{
        client.getEntries({
            'content_type': 'wfAboutSection',
            locale: this.props.aboutlocale.locale  

        })
            .then((response) => {
                this.setState({
                    Abouts: response.items
                })
            })
            .catch(console.error)
     }
     getSnapshotBeforeUpdate(nextProps) {         
         if (nextProps.aboutlocale !== this.props.aboutlocale) {
             
             {this.servercall()}
           return true;
         } else {
           return false;
         }
       }
     componentDidMount=()=> {
        
         {this.servercall()}
     }   
    
    render() {
   
        return (
            <div className="layout_padding about_section" id="about">
                {this.state.Abouts.map
                    ((About, index) => <VSAboutSectionPost About={About} key={index} />)}
            </div>
        )
    }
}

export default WFAboutSection;