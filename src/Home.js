import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        
        <header> 
            <div className='position-fixed'>
                <img className='vw-100 vh-100' src="/home.jpg" alt="Background"/>
            </div>

            <div className='position-absolute text-white p-3 m-4 rounded-lg shadow-lg' style={{backgroundColor:'rgba(0,0,0,0.7)'}}>
                <h1>Welcome!</h1>
                <h2>Ready to keep your series up to date?</h2>
                <h3 style={{marginTop:'20px'}}>Click on <Button color="primary" size="lg" tag={Link} to='/series'>Series</Button> to see your series or add a new one</h3>
                <h3 style={{marginTop:'20px'}}>Click on <Button color="primary" size="lg" tag={Link} to='/genres'>Genre</Button> to add a new genre</h3>
            </div>
            

            <div className='p-2 fixed-bottom text-center text-white' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
                Implemented by <a href="https://www.linkedin.com/in/pedroafonsoferraz" target="_blank">Pedro Afonso</a>
            </div>
       </header>       
    )
  }

export default Home