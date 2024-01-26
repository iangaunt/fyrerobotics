import React from "react";

import Robot from "../pieces/Robot"

export default function Robots() {
    return (
        <div id="robots">
            <h1></h1>
            <div id="bots-container">
                <Robot 
                    name="aurora" 
                    season={2018} 
                    description="Built to complete the Power Up challenge, Aurora has a hexagonal 
                    chassis in the shape of a rectangle and trapezoid put together to
                    afford enough space for everything but keep her small for maneuvering
                    and fitting easily on the platform out of other robot's ways." 
                />  

                <Robot 
                    name="sol" 
                    season={2019} 
                    description="Built to complete the Destination: Deep Space challenge, 
                    Sol is our sturdiest robot with a combination of tried-and-true 
                    and new features we haven't used before." 
                />

                
                <Robot 
                    name="billy" 
                    season={2020} 
                    description="Built to complete the Infinite Recharge challenge, 
                    Billy is one of our strongest competitors, using its advanced design
                    to score points and climb during the endgame. Unfortunately, due to 
                    COVID-19, this robot did not get the chance to participate." 
                />

                <Robot 
                    name="matchbox"
                    season={2022} 
                    description="Built to complete the Rapid React challenge, 
                    Matchbox was used in order to shoot balls into the center game 
                    pieces and defend against other robots on the field. It was also
                    able to climb to the middle and lower rungs if need be." 
                />

                <Robot 
                    name="ignis"
                    season={2023} 
                    description="Built to complete the Charged Up challenge, 
                    Ignis was built in order to sustain the injury of such a contact-heavy
                    challenge. Ignis could pick up inflatable cubes and shoot them into
                    the highest level while navigating the field.." 
                />  
            </div>
        </div>
    )
}