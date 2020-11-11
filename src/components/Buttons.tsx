import React from "react"

interface ButtonProps{
    loadFilmsList: VoidFunction;
    loadLocationList: VoidFunction;
}

const Buttons = (props: ButtonProps) => {
    return (
            <div>
                <div className="mb-5"><button className="btn-huge color-acc-amber" onClick={props.loadFilmsList}>Load Films:</button></div>
                <div className="mb-5"><button className="btn-huge color-acc-amber" onClick={props.loadLocationList}>Load Locations:</button></div>
            </div>
           
        ); 
}

export default Buttons;