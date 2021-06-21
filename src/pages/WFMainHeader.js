import React from 'react';
import HeaderSection from '../pages/WFHeaderSection';
import BannerSection from '../pages/WFBannerSection';

class WFMainHeader extends React.Component {

    render() {
        return (
            
            <div className="header_section">
                <HeaderSection hmenulocale={this.props.headerlocale} />
                <BannerSection hmenulocale={this.props.headerlocale}/>
            </div>
        )
    }
}

export default WFMainHeader;