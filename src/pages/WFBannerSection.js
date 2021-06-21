import React from 'react';
import { client } from '../client';
import VSBannerSectionPost from './datalayer/WFBannerSectionPost';
import { Slide  } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";


class WFBannerSection extends React.Component {
    state = {
        Banners: []
    }
    servercall =()=>{
       client.getEntries({
            'content_type': 'wfBannerSection',
            'order': 'sys.createdAt',
            locale: this.props.hmenulocale.locale          

        })
            .then((response) => {
                this.setState({
                    Banners: response.items
                })
            })
            .catch(console.error)
    }
    getSnapshotBeforeUpdate(nextProps) {         
        if (nextProps.hmenulocale !== this.props.hmenulocale) {
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
        var settings = {   
            infinite: true,  
            speed: 500,
            };  
        return (
            <div className="banner_section layout_padding">
                <div className="container-fluid">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="slide-container">
                            <Slide {...settings}>
                                {this.state.Banners.map
                                    ((Banner, index) => <VSBannerSectionPost Banner={Banner} key={index} />)}
                            </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WFBannerSection;