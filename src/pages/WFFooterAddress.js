import React, { Component } from 'react';
class address extends Component {
    state = {}
    render() {
        return (<div className="col-lg-6 col-md-6 col-sm-6 ">
            <h2 className="useful_text">Address</h2>
            <ul className="location">
                {this.props.address.map((add) => <li><img src={add.fields.addressimage.fields.file.url} alt="f1" />{add.fields.addresstext}</li>)}
            </ul>
        </div>);
    }
}

export default address;