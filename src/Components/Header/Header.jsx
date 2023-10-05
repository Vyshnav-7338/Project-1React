import React from 'react'
import './Header.css'
import { BsSearch } from 'react-icons/bs'
function Header() {
    return (
        <header>
            <div class="container container-header">
                <div class="row">
                    <div class="col-12 mr-auto ml-auto">
                        <h1>welcome</h1>
                    </div>
                    <div class="wrapper col-12">
                        <input type="text" class="input" placeholder="Search Aadhar Number" />
                        <div class="searchbtn"><BsSearch className='icon' /></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
