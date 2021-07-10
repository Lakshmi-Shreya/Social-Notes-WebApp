  
import React from 'react'
import '../css/Widget.css';

function Widget() {
    return (
        <div className='widget'>
            <h4>Your Pages</h4>
            <iframe
            src="https://www.facebook.com/plugins/page.php?
            href=https://www.facebook.com/facebook&
            tabs=timeline&width=340&height=1500&small_header=false&
            adapt_container_width=true&
            hide_cover=false&show_facepile=true&appId"
            title="i-frame demo"
            width='340'
            height='100%'
            style={{border:'none', overflow:'hidden'}}
            scrolling='no'
            frameBorder='0'
            allowTransparency='true'
            allow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widget