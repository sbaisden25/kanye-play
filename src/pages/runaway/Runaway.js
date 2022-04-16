import React, { Component } from "react"

import RunawaySoundboard from "../../components/Soundboard/RunawaySoundboard";
import Video from "../../components/Video/Video";

class Runaway extends Component {
    render() {
        return (

            <div class="main-container">
                
                <Video embedId="xihvf-I0d2Q"/>
                <RunawaySoundboard />
                
            </div>
        )
    }
}

export default Runaway;