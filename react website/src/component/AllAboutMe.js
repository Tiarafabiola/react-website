import React from 'react'
import ButtonSaya from './MyButton'

const AllAboutMe = () => {
  return (
    <div className="section">
        <div className="row align-items-flex">
            <div className="col-6 text-center">
            <img className="avatar" src="Fab.png"/>
            </div>
            <div className="col-6 ">
                    <h1>AllAboutMe</h1>
                    <p>
                    I'm Fabiola Tiara Hanapu
                       Information System
                       Faculty Of Computer Science 
                       Klabat University 2020
                    </p>
                <ButtonSaya 
                    text="Profil" 
                    warna="info"
                    link="https://github.com/Tiarafabiola" />
            </div>
        </div>
    </div>
  )
  }
  export default AllAboutMe