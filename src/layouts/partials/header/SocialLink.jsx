import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faBehance,
    faLinkedinIn,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';


class SocialLink extends Component {
    render() { 
        return ( 
            <ul>
                {/*<li>*/}
                {/*    <a href="https://facebook.com" target="__blank">*/}
                {/*        <FontAwesomeIcon icon={faFacebookF}/>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="https://twitter.com" target="__blank">*/}
                {/*        <FontAwesomeIcon icon={faTwitter}/>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="https://behance.com" target="__blank">*/}
                {/*        <FontAwesomeIcon icon={faBehance}/>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="https://linkedin.com" target="__blank">*/}
                {/*        <FontAwesomeIcon icon={faLinkedinIn}/>*/}

                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="https://youtube.com" target="__blank">*/}
                {/*        <FontAwesomeIcon icon={faYoutube}/>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
         );
    }
}
 
export default SocialLink;