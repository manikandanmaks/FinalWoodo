import React from 'react';
import { client } from '../client';
import WFFurnitureImageSectionPost from './datalayer/WFFurnitureImageSectionPost';

class WFFurnitureSection extends React.Component {
    state = {
        FurnitureImages: []
    }
    servercall =()=>{
        client.getEntries({
            'content_type': 'wfFurnitureImageSection',
            locale:this.props.f2locale.locale
        })
            .then((response) => {
                this.setState({
                    FurnitureImages: response.items
                })
            })
            .catch(console.error)
     }
     getSnapshotBeforeUpdate(nextProps) {         
         if (nextProps.f2locale !== this.props.f2locale) {
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
            <div className="our_section_2">
                <div className="row">
                    <div className="images_section_2">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="image_left">
                                <button className="seemore_bt">SEE MORE</button>
                            </div>
                           
                            {this.state.FurnitureImages.map
                                ((FurnitureImage, index) => <WFFurnitureImageSectionPost FurnitureImage={FurnitureImage} key={index} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WFFurnitureSection;