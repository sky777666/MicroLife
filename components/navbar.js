import Link from 'next/link';
import NavBar2 from '../components/NavBar2'


const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    {/* <div className="container"> */}
      <a className="navbar-brand" href="#">MicroCosm</a>
      <div className="collapse navbar-collapse">
       
        <ul className="navbar-nav ml-auto">
         
          <li className="nav-item">
          
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
         

          <li className="nav-item">
            <Link href="/welcome"><a className="nav-link">Welcome</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>

          <li className="nav-item">
            <Link href="/protozoa"><a className="nav-link">Protozoa</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/algae"><a className="nav-link">Algae</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/bacterium"><a className="nav-link">Bacterium</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/virus"><a className="nav-link">virus</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/fungi"><a className="nav-link">fungi</a></Link>
          </li>



          <li className="nav-item">
            <Link href="/contact"><a className="nav-link">Contact</a></Link>
          </li>
        
        </ul>
      </div> 
  </nav>
 
);


export default Navbar







// import Head from 'next/head'
// import React, { useEffect } from 'react'
// import { FaGithub } from 'react-icons/fa'
// import { FaLinkedin } from 'react-icons/fa';
// import { FaFile } from 'react-icons/fa'
// import { FaTwitter } from 'react-icons/fa'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'

// export default function Navbar() {

//     return (
//         <div>
//             <Head>
//                 <title>Luke Myers</title>
//             </Head>



// <style jsx>{`
// ul {
//     background: #333;
//     color:#fff;
//     display:flex;
// }
// ul li {
//     font-size:18px;
//     margin-right: 20px;
// }

// ul li a {
//     color:#fff;
//     text-decoration:none;
// }


// `}</style>



//   {/* <div class="topnav">
//   <a class="active" href="#home">Home</a>
//   <a href="#news">Video's </a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   </div> */}

//             <navbar>
//                 <ul className={styles.navbar}>
            
//             <div>
//             <a href="https://github.com/sky777666">
//                 <FaGithub size={50} color={'white'}  />
//             </a>
//             </div>
//             <div>
//             <a href="https://www.linkedin.com/in/luke-myers-5176022a/" >
//                 <FaLinkedin size={50} color={'white'}  />
//             </a>
//             </div>
//             <div>
//                 <a href="static/Luke Myers Resume 2020 .pdf" >
//                     <FaFile size={50} color={'white'} />
//                 </a>
//             </div>
//                 </ul>
//             </navbar>
//         </div>
//     )
// } 