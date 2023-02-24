import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function Navbar(){
    return(
        <nav class="navbar navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="logo512.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
                React
                </a>
            </div>
</nav>
    )
}
export default Navbar;