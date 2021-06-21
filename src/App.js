import React,{ useState } from 'react';
import FeedBack from 'react-feedback-popup';
import './App.css';
import About from './pages/WFAboutSection';
import Furniture from './pages/WFFurnitureSection';
import FurnitureImage from './pages/WFFurnitureImageSection';
import Contact from './pages/WFContactSection';
import Footer from './pages/WFMainFooter';
import Testimonial from './pages/WFTestimonial';
import Header from './pages/WFMainHeader';
import CopyRight from './pages/WFCopyRight';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
const contentful = require('contentful-management')

const clientEntry = contentful.createClient({
  accessToken: 'CFPAT-TRWTSHqeciytB1Mbrj7M4p1rvTXEapi4KjrsnHK3Fhs'
})
const App = () => {	
		const [locale, setChange] = useState("en");
		const onChangeValue = (e) => {
			console.log(e.target.value)
			setChange({locale:e.target.value});
		  };		
		return ( 
<div className="App">		
		 <div onChange={onChangeValue} className="demo-blog__posts mdl-grid">
          <div className="mdl-language mdl-cell mdl-cell--12-col">
            <ul>
              <li>
                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                  <input type="radio"   name="language" value="en" defaultChecked={true}/>
                  <span className="mdl-radio__label">English</span>
                </label>
              </li>
              <li>
                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                  <input type="radio" name="language" value="es"    />
                  <span className="mdl-radio__label">Spanish</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

    <Header headerlocale={locale} />
    <About aboutlocale={locale}/>
    <Furniture f1locale={locale}/>
    <FurnitureImage f2locale={locale} />
    <Testimonial />
    <Contact />
    <Footer footerlocale={locale}/>
    <CopyRight />	
			<FeedBack
				style={{zIndex:'2', marginLeft:'20px', position:'fixed',backgroundColor:'rgb(255 255 255)',border: "0px solid ",}}			
				position="right"
				numberOfStars={5}
				headerText="Have Feedback?☝️"
				bodyText="Write Something about Woodo!"
				buttonText="Rate Us!"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data)  => 
					
					clientEntry.getSpace('oci0egklfnxu')
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.createEntry('wfTestimonial',{
	fields:{contenttitle:{'en':data['name']},content:{'en':data['message']},emailAddress:{'en':data['email']},rating:{'en':data['rating']}}
}
)).then((entry) => entry.publish())
.then((entry) => console.log(entry))
.catch(console.error)					
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
		</div>
		 );
	}
export default App;
