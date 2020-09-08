import React from 'react';
import Link from 'next/link';


const NavBar2 = () => {
    return (
      <>
            <div class="header">
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul class="sidebarMenuInner">
    <ul className="navbar-nav ml-auto">
         <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link> </li>
         <li className="nav-item"> <Link href="/welcome"><a className="nav-link">Welcome</a></Link></li>
         <li className="nav-item"><Link href="/about"><a className="nav-link">About</a></Link></li>
         <li className="nav-item"> <Link href="/protozoa"><a className="nav-link">Protozoa</a></Link></li>
         <li className="nav-item"> <Link href="/algae"><a className="nav-link">Algae</a></Link></li>
         <li className="nav-item"> <Link href="/bacterium"><a className="nav-link">Virus and Bacterium</a></Link></li>
         <li > <Link href="/fungi"><a className="nav-link">fungi</a></Link></li>
         <li className="nav-item"><Link href="/space"><a className="nav-link">Space</a></Link></li>
        <li> <Link href="/contact"><a className="nav-link">Contact</a></Link></li>
    </ul>
    </ul>
  </div>
  </div> 
     </>
    );
};

export default NavBar2;