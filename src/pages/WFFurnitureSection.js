import React from 'react';
import { client } from '../client';
import WFFurnitureSectionPost from './datalayer/WFFurnitureSectionPost';

class WFFurnitureSection extends React.Component {
    state = {
        FurnitureDetail: []
    }
    servercall =()=>{
        client.getEntries({
            'content_type': 'wfFurnitureSection',
            locale:this.props.f1locale.locale
        })
            .then((response) => {
                this.setState({
                    FurnitureDetail: response.items
                })
            })
            .catch(console.error)
     }
     getSnapshotBeforeUpdate(nextProps) {         
         if (nextProps.f1locale !== this.props.f1locale) {
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
            <div className="our_furniture_section layout_padding" id="furnitures">
                {this.state.FurnitureDetail.map
                    ((Furniture, index) => <WFFurnitureSectionPost Furniture={Furniture} key={index} />)}
            </div>
        )
    }
}

export default WFFurnitureSection;