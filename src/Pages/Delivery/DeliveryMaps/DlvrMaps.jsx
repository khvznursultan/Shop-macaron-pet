import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaLocationDot } from 'react-icons/fa6';
import ReactDOMServer from 'react-dom/server';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.divIcon({
    html: ReactDOMServer.renderToString(<FaLocationDot style={{ color: '#e94135', fontSize: '24px' }} />),
    className: 'custom-icon',
});

const DlvrMaps = () => {
    return (
        <div>
            <MapContainer
                center={[42.87938055836502, 74.58212774146752]}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
                zoomControl={false}
            >
                <TileLayer
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[42.87938055836502, 74.58212774146752]} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default DlvrMaps;
