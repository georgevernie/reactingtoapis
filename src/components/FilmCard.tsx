import React from "react"

interface FilmCardProps{
    filmTitle:string;
    filmDescription:string;
    filmProducer:string;
    filmReleaseDate:string;
    filmArr: any;
}

interface ItemProps{
    title:string;
    description:string;
    producer:string;
    release_date:number;
    id:number;
}


const FilmCard = (props: any | FilmCardProps) => {
    return (
        props.filmArr.map((item: ItemProps) => { 
            return (
                <div key={item.id.toString()} className="text-center mb-5">
                    <div className="card shadow text-center color-acc-white"
                        style={{ display: "inline-block", height: "40rem", width: "40rem" }}>
                        <div className="card-body">
                            <ul className="list-group font-lg list-group-flush">
                                <h5 className="list-group-item">{props.filmTitle}</h5>
                                <li className="list-group-item">{item.title}</li>
                                <h5 className="list-group-item">{props.filmDescription}</h5>
                                <li className="list-group-item">{item.description}</li>
                                <h5 className="list-group-item">{props.filmProducer}</h5>
                                <li className="list-group-item">{item.producer}</li>
                                <h5 className="list-group-item">{props.filmReleaseDate}</h5>
                                <li className="list-group-item">{item.release_date}</li>
                                <button className="btn-lg color-acc-amber" onClick={()=> window.open(`https://ghibliapi.herokuapp.com/films/${item.id}`, "_blank")}>See Json for this Film</button>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        })

    );
}

export default FilmCard;