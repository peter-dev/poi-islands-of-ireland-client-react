import React from 'react';
import {MemoryRouter} from 'react-router';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import 'semantic-ui-css/semantic.min.css'
import NotFound from '../src/components/notfound';
import CustomMessage from '../src/components/message';
import Header from '../src/components/header/';
import LoginForm from '../src/components/login';
import SignupForm from '../src/components/signup';
import IslandDetails from '../src/components/island';
import SearchControls from '../src/components/searchcontrols';
import AddIslandForm from '../src/components/add';
import Map from '../src/components/map';

const mockIsland = {
    "location": {
        "lat": 55.19369052,
        "lng": -6.96442359
    },
    "_id": "5d519cab41ebb81840e87ace",
    "name": "Lough Foyle Island",
    "description": "Lough Foyle C660-390 Sheet 3/4 Embarkation The logical embarkation point for the outer regions of Lough Foyle is Magilligan Point, by the Martello Tower. Access is by the B202 past the prison and rifle range. Do not block roads. Park by the hotel. The whole region is a security area, frequently patrolled. Especially beware of the military zone on the beach immediately to the E of the point, Benone Beach, on which it’s better not to land (certainly not while firing is going on). Accurate information for those passing the firing range can now be obtained from CANI. Further to the E, beyond the military zone, there is public access at about C716-363. There is a concrete slip across the beach. However, the beach surfs and there is a strong tidal drift. This may have relevance for launching. Expect caravans, lifeguards, and beach casting anglers. Military installations on both sides show the importance of the lough in such terms. The whole lough is less interesting inwards to the SW. There are large areas of mudflats on the E side. That said, it is a busy, well marked and well lit area. It is excellent for night navigation, sheltered but with strong tides. If paddling up into the city, it is possible to take out at Prehen Boat Club upstream of the Craigavon Bridge on the E bank. Road access is better on the Donegal side and there are nice secluded beaches. Greencastle at C648-400 lies directly across from Magilligan Point. The Donegal shore gets the more interesting up towards Inishowen Head at C685-438. The sea is much more exposed beyond the head. Tides Fierce tides push through the narrows. Rates of 3.5kn should not be treated lightly. Eddies on the Donegal side run from Warren Point to Moville and are usable on both flood and ebb.",
    "region": "5d519cab41ebb81840e87ac9",
    "createdBy": "5d519cab41ebb81840e87ac6"
};

const mockRegions = [
    {text: 'North East', value: '5d52f1dcb0256f1e7ed39638'},
    {text: 'East Coast', value: 'd52f1dcb0256f1e7ed39639'},
    {text: 'South Coast', value: '5d52f1dcb0256f1e7ed3963a'},
];

const mockRatings = [
    {
        "_id": "5d519cac41ebb81840e87ad3",
        "score": 5,
        "island": "5d519cab41ebb81840e87ace",
        "user": "5d519cab41ebb81840e87ac6"
    },
    {
        "_id": "5d519cac41ebb81840e87ad6",
        "score": 4,
        "island": "5d519cab41ebb81840e87ace",
        "user": "5d519cab41ebb81840e87ac7"
    },
    {
        "_id": "5d519cac41ebb81840e87ad9",
        "score": 3,
        "island": "5d519cab41ebb81840e87ace",
        "user": "5d519cab41ebb81840e87ac8"
    }
];

storiesOf('POI App/Header', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <Header/>
    ));

storiesOf('POI App/Not Found', module).add('default', () => (<NotFound/>));

storiesOf('POI App/Custom Message', module)
    .add('default', () => (<CustomMessage header='A basic message...' content='Message details'/>))
    .add('success', () => (<CustomMessage type='success' header='A success message...' content='Request successful'/>))
    .add('error', () => (<CustomMessage type='error' header='There was a problem...' content='Validation failed'/>));

storiesOf('POI App/Login Form', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <LoginForm/>
    ));

storiesOf('POI App/Signup Form', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <SignupForm/>
    ));

storiesOf('POI App/Island Page/Details', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('with ratings', () => (<IslandDetails island={mockIsland} ratings={mockRatings}/>))
    .add('without ratings', () => (<IslandDetails island={mockIsland} ratings={[]}/>));

storiesOf('POI App/Island Page/Map', module)
    .add('default', () => (
        <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `100%`}}/>}
            location={mockIsland.location}
            containerElement={<div style={{height: `400px`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
        />));

storiesOf("POI App/Island Page/Search Controls", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('disabled island dropdown', () => {
        return <SearchControls regions={mockRegions} islands={[]} handleSelection={action('Search criteria changes')}/>
    });

storiesOf("POI App/Island Page/Search Controls", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('enabled island dropdown', () => {
        const mockRegions = [
            {text: 'North East', value: '5d52f1dcb0256f1e7ed39638'}
        ];
        const mockIslands = [
            {text: 'Lough Foyle Island', value: '5d52f1dcb0256f1e7ed3963d'},
            {text: 'River Bann Island', value: '5d52f1dcb0256f1e7ed39658'}
        ];
        return <SearchControls regions={mockRegions} islands={mockIslands}
                               handleSelection={action('Search criteria changes')}/>
    });

// TODO this story is not rendering when I used custom HOC component 'withDidMount'
storiesOf("POI App/Add Island Form", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <AddIslandForm/>
    ));