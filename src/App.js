import React from 'react'
import ContactCard from './ContactCard'

function App(){
    return(
        <div className="contacts">
            <ContactCard 
            name='Mr. Whiskerson'
            imgUrl="http://placekitten.com/300/200"
            phone='(212) 555-1234'
            email='mr.whiskaz@catnap.meow'
            />
            <ContactCard 
            name='Fluffykins'
            imgUrl="http://placekitten.com/400/200"
            phone='(212) 555-2345'
            email='fluff@me.com'
            />
            <ContactCard 
            name='Destroyer'
            imgUrl="http://placekitten.com/400/300"
            phone='(212) 555-1334'
            email='ofworlds@yahoo.com'
            />
            <ContactCard 
            name='Felix'
            imgUrl="http://placekitten.com/300/200"
            phone='(212) 555-1234'
            email='thecat@hotmail.com'
            />
            
        </div>

    )
}

export default App