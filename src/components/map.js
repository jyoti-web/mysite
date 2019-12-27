import React from 'react'
import {InfoWindow, Marker, Map, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		};
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	};

	onInfoWindowClose = () => {
		this.setState({
			showingInfoWindow: false,
			activeMarker: null
		});
	};

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	render() {
		return (
			<div id="google-map-holder">
				<Map google={this.props.google}
						style={{width: '30%', height: '30%', position: 'inherit'}}
						className={'map'}
						zoom={14}
						onClick={this.onMapClicked}
            initialCenter={{ lat: 30.911140, lng: 75.849487 }}
            >
        <Marker
          onClick={this.onMarkerClick}
          name={<h6>Squareloops company</h6>}
        />
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onInfoWindowClose}>
							<div>
								<h1>{this.state.selectedPlace.name}</h1>
							</div>
					</InfoWindow>
				</Map>
		</div>
		)
	}
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCm0tUMt_M12nlMsDjU5qs_VNgq3DsNAFk'
})(MapContainer);
