import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        scr='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'/>

                        <CardItem 
                        scr='images/img-2.jpg'
                        text='Travel through the island of Bali in a private cruise'
                        label='Luxury'
                        path='/services'/>
                         
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        scr='images/img-3.jpg'
                        text='Set Sail in the Atlantic Ocean visiting uncharted waters'
                        label='Adventure'
                        path='/services'/>

                        <CardItem 
                        scr='images/img-4.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Luxury'
                        path='/services'/>

                        <CardItem 
                        scr='images/img-8.jpg'
                        text='Ride through the Sahara Desert on a guided Camel tour'
                        label='Luxury'
                        path='/services'/>
                         
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
