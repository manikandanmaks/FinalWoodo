import React, { Component } from 'react';
import Footeraddress from './WFFooterAddress';
import Menus from './WFFooterMenus';
import { client } from '../client';

class WFMainFooter extends Component {
	state = {
		menusList: [],
		addresslist: []
	}
	servercall =()=>{
		client.getEntries({ 
			content_type: 'wfFooterMenus',
			'order': 'sys.createdAt',
		locale:this.props.footerlocale.locale })
			.then((response) => {
				console.log(response)
				this.setState({
					menusList: response.items
				})
			})
			.catch(console.error)
		client.getEntries({ content_type: 'wfFooterAddress' })
			.then((response) => {
				console.log(response)
				this.setState({
					addresslist: response.items
				})
			})
			.catch(console.error)
	 }
	 getSnapshotBeforeUpdate(nextProps) {         
		 if (nextProps.footerlocale !== this.props.footerlocale) {
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
			<div className="footer_section layout_padding" id="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Menus menus={this.state.menusList} />
						</div>
						<Footeraddress address={this.state.addresslist} />
						<div className="col-lg-6 col-md-6 col-sm-6 ">
							<h2 className="useful_text">Newsletter</h2>
							<div className="form-group">
								<input type="text" className="address_send" placeholder="Address" name="Email" />
								<button className="subscribe_bt">Subscribe</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WFMainFooter;