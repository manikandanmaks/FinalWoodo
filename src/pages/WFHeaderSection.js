import React from 'react';
import { client } from '../client';
import VSHeaderSectionPost from './datalayer/WFHeaderSectionPost';
import logo from '../images/logo.png';
import search from '../images/search-icon.png';
import shopping from '../images/shopping-bag.png';

class WFHeaderSection extends React.Component {
    state = {
        Headers: []
    }
    servercall =()=>{
        client.getEntries({
            'content_type': 'wfHeaderSection',
            'order': 'sys.createdAt',
            locale: this.props.hmenulocale.locale          
        })
            .then((response) => {
                this.setState({
                    Headers: response.items
                
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
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <div className="logo"><img src={logo} alt="logo"/></div>
                    </div>
                    <div className="col-sm-4 col-lg-5">
                        <div className="menu-area">
                            <nav className="navbar navbar-expand-lg ">
                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        {this.state.Headers.map
                                            ((Header, index) => <VSHeaderSectionPost Header={Header} key={index} />)}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-8 col-lg-4">
                        <div className="togle_3">
                            <div className="left_main">
                                <div className="menu_main">
                                    <a href="https://www.ameexusa.com/"><i className="fa fa-fw fa-user"></i> Login / Register</a>
                                </div>
                            </div>
                            <div className="middle_main">
                                <div className="shoping_bag"><img src={search} alt="search"/></div>
                            </div>
                            <div className="right_main">
                                <div className="togle_main"><img src={shopping} alt="shopping"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WFHeaderSection;