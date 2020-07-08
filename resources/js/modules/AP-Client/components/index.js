import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import RouteAP from './router/router';
import Footer from './layout/footer';
function IndexAP(){
    return(
<div className="m-grid m-grid--hor m-grid--root m-page">

    <Header/>
    <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
    <Sidebar/>
    <Suspense fallback={<div>Loading...</div>}>
    <RouteAP />
    </Suspense>
   </div>
    <Footer/>
 
</div>
)
}
export default IndexAP;
if (document.getElementById('ap-client')) {
  ReactDOM.render(<IndexAP />, document.getElementById('ap-client'));
}