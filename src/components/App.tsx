import React, { Component } from "react";
import "../stylesheets/App.css";
import FilmCard from "./FilmCard";
import LocationCard from "./LocationCard";
import Buttons from "./Buttons";
import Header from "./Header";
import { ObjectLiteralElement } from "typescript";

interface AppProps {
    films: Array<ObjectLiteralElement>;
    locations: Array<ObjectLiteralElement>;
    filmTitle: string;
    filmDescription: string;
    filmProducer: string;
    filmReleaseDate: string;
    filmsLoaded: boolean;
    locationName: string;
    locationClimate: string;
    locationWaterTemp: string;
    locationTerrain: string;
    locationsLoaded: boolean;
    start: boolean;
}
interface AppState {
    films: Array<ObjectLiteralElement>;
    locations: Array<ObjectLiteralElement>;
    filmTitle: string;
    filmDescription: string;
    filmProducer: string;
    filmReleaseDate: string;
    filmsLoaded: boolean;
    locationName: string;
    locationClimate: string;
    locationWaterTemp: string;
    locationTerrain: string;
    locationsLoaded: boolean;
    start: boolean;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            films: [],
            filmTitle: "Film Title: ",
            filmDescription: "Film Description: ",
            filmProducer: "Film Producer: ",
            filmReleaseDate: "Film Release Date: ",
            filmsLoaded: false,
            locations: [],
            locationName: "Location Name: ",
            locationClimate: "Location Climate: ",
            locationWaterTemp: "Location Water Temperature: ",
            locationTerrain: "Location Terrain: ",
            locationsLoaded: false,
            start: true,
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(objLit => {
                this.setState({ films: objLit })
            }).catch(e => console.log(e));
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res => res.json())
            .then(objLit => {
                this.setState({ locations: objLit })
            }).catch(e => console.log(e));
    }
    loadFilms = () => {
        this.setState({
            filmsLoaded: true,
            locationsLoaded: false,
            start: false,
        });
    }
    loadLocation = () => {
        this.setState({
            locationsLoaded: true,
            filmsLoaded: false,
            start: false,
        });
    }

    render() {
         // Destructuring state properties
        const { start, filmsLoaded, locationsLoaded, filmTitle, filmReleaseDate, filmProducer,
            filmDescription, films, locationClimate, locationName, locationTerrain, locationWaterTemp, locations } = this.state; 
        if (start === true) {
            return (
                <div className="text-center">
                    <Header listHeader={"Studio Ghibli List"}></Header>
                    <Buttons loadFilmsList={this.loadFilms} loadLocationList={this.loadLocation}></Buttons>
                </div>
            );
        }
        else if (filmsLoaded === true) {
            return (
                <div className="text-center">
                    <Header listHeader={"Studio Ghibli Film List"}></Header>
                    <Buttons loadFilmsList={this.loadFilms} loadLocationList={this.loadLocation}></Buttons>
                    <FilmCard
                        filmTitle={filmTitle}
                        filmDescription={filmDescription}
                        filmProducer={filmProducer}
                        filmReleaseDate={filmReleaseDate}
                        filmArr={films}>
                    </FilmCard>
                </div>
            );
        }
        else if (locationsLoaded === true) {
            return (
                <div className="text-center">
                    <Header listHeader={"Studio Ghibli Location List"}></Header>
                    <Buttons loadFilmsList={this.loadFilms} loadLocationList={this.loadLocation}></Buttons>
                    <LocationCard
                        locationName={locationName}
                        locationClimate={locationClimate}
                        locationWaterTemp={locationWaterTemp}
                        locationTerrain={locationTerrain}
                        locationArr={locations}></LocationCard>
                </div>
            );
        }
    }
}


export default App;
