import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const useGeolcation= ()=>{
    const [coords, setCoordinates] = useState({})

    useEffect(()=>{
           window.navigator.geolocation.getCurrentPosition((coords)=>{
                let coordss = {
                        lat: coords.coords.latitude,
                        lon: coords.coords.longitude
                } 
                setCoordinates(coordss)
           },()=>{
               console.log("permission denied")
           }) 
    },[])  
    return coords
}

const App =()=>{
    const coords = useGeolcation()
    console.log(coords)
    return (<h1>
            {coords.lat} <br/>
            {coords.lon}
    </h1>)
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
