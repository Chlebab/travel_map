import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import {geoCentroid} from 'd3-geo'
import Container from './containers/Container';


function App() {
  const [width, setWidth] = useState(1600);
  const [height, setHeight] = useState(1200);

  return (
    <div>
      <ComposableMap
        projectionConfig={{ scale: 500 }}
        projection="geoEqualEarth"
        width={width}
        height={height}
        style={{ width, height }}
      >
        <Geographies geography={"https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const nameCenter = geoCentroid(geo)
              return (
                <>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#ECEFF1"
                    stroke="#252525"
                    strokeWidth={1}
                  />
                  <Marker key = {geo.rsmKey} coordinates={nameCenter}>
                    <text
                      textAnchor="middle"
                      fontSize="8"
                      fontWeight="bold"
                      fill="#252525">{geo.properties.name}</text>
                  </Marker>
                </>
              )
            })
          }
        </Geographies>
      </ComposableMap>
      <Container/>
    </div>
  );
}

export default App;