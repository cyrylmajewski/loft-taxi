import mapboxgl, { Map } from 'mapbox-gl';
import { useState, useRef, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';


const AppMap = (): JSX.Element => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3JhY2t0aGlzbSIsImEiOiJjbDU3OHQ1NzkxcGlrM2R0N3A4Y2d5dXNiIn0.uqFHbc2TOTNRauVRiGz2eA';

    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapDiv.current) {
            return;
        }
        new mapboxgl.Map({
            container: mapDiv.current || '', // NO ERROR
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [-121.91390991210938, 40.316184625814095],
            zoom: 10,
        })

    }, []);

    return (
        <div className="mapPage">
            <div ref={mapDiv} className="map-container" ></div>
        </div>
    );
};

export default AppMap;