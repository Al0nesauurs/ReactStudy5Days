import React, {PropTypes} from 'react';
import './styles/home_style.css';
import GoogleMap from 'react-google-map';
import GoogleMapLoader from 'react-google-maps-loader';
import iconMarker from '../logo.jpg';
import iconMarker2 from '../logo.jpg';

const MY_API_KEY = "AIzaSyAgLTROiEZKFq1ddUr37zaMG88jYzLVdhY"

const Map = ({googleMaps}) => (
  <div className="map">
    <GoogleMap
        googleMaps={googleMaps}
        coordinates={[
            {
                title: "Your location",
                position: {
                    lat: 13.806024,
                    lng: 100.567661,
                },
                onLoaded: (googleMaps, map, marker) => {
                    marker.setAnimation(googleMaps.Animation.BOUNCE)

                    const infoWindow = new googleMaps.InfoWindow({
                        content: `
                            <div>
                                <h3>You are here.<h3>
                                <div>
                                Click one of the <span id='link'>mechanic's marker</span> to match you and your mechanics.
                            </div>
                            </div>
                        `,
                    })

     
                    googleMaps.event.addListener(marker, "click", () => {
                        infoWindow.open(map, marker)

                    })
         
                    googleMaps.event.addListener(marker, "mouseover", () => {
                        marker.setIcon(iconMarker)
                    })
         
                    googleMaps.event.addListener(marker, "mouseout", () => {
                        marker.setIcon(iconMarker)
                    })

                    infoWindow.open(map, marker)
                },
            },
            {
                title: "Mechanic's location",
                position: {
                    lat: 13.781268,
                    lng: 100.617841,
                },
                onLoaded: (googleMaps, map, marker) => {
                    const infoWindow = new googleMaps.InfoWindow({
                        content: `
                            <div>
                                <h3>One of the mechanic is here.<h3>
                                <div>
                                Click <span id='link'>this mechanic's marker</span> to match this mechanic.
                            </div>
                            </div>
                        `,
                    })

                    const ackWindow = new googleMaps.InfoWindow({
                        content: `
                            <div>
                                <h3><span id='matched'>You are matched</span> with this mechanic!<h3>
                                <div>
                                Please wait a few minutes. The mechanic is going to your location.
                            </div>
                            </div>
                        `,
                    })

     
                    googleMaps.event.addListener(marker, "click", () => {
                        ackWindow.open(map, marker)
                        marker.setIcon(iconMarker2)
                        marker.setAnimation(googleMaps.Animation.BOUNCE)

                    })
         
                    googleMaps.event.addListener(marker, "mouseover", () => {
                        infoWindow.open(map, marker)
                    })
         
                    googleMaps.event.addListener(marker, "mouseout", () => {
                        infoWindow.close(map, marker)
                    })
                },
            }
        ]}
        center={{lat: 13.806024, lng: 100.567661}}
        zoom={13}
        onLoaded={(googleMaps, map) => {
            map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
        }}
    />
  </div>
)
///
Map.propTypes = {
  googleMaps: PropTypes.object.isRequired,
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})--