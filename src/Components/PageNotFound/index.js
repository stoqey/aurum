import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

class PageNotFound extends React.Component{
	render(){
		return(
			<div className="error-template">
            	<p>Oops!</p>
            	<p>404 Not Found</p>
				<br/>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <br/>
                <Link to="/">Go Back to Homepage</Link>
        	</div>
		);
	}
}

export default PageNotFound;