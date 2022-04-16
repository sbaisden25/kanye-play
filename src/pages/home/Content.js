import React from "react";
import Quote from './Quote';

function Content() {
  
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-5 talk">
                        <Quote/>
                    </div>
                    <div className="col-sm-6 showcase-img">
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Content;