import React from 'react';
import ReactDOM from 'react-dom/client';
import { SVGGroup } from './svgRendererCommonComponents'

// this class renders a single <svg> image, that may contain multiple groups of elements
export function SVGImage(props)
{
	function makeBG() {
		if (props.inputObject.meta.background)
			return (<rect width="100%" height="100%"
				fill={props.inputObject.meta.background.color ?? "#fff"}
				opacity={props.inputObject.meta.background.opacity ?? 1. }
			/>);
		else return;
	}

	const groups = [];
	props.inputObject.renderGroups.forEach( (group) => {
			groups.push(<SVGGroup key={group.id} group={group}/>
		);}
	);

	const markers = [];
	if (props.inputObject.meta.markers) {
		props.inputObject.meta.markers.forEach( (marker) => {
			markers.push(
				<marker
						key={marker.id}
						id={marker.id}
			      viewBox={"0 0 " + (marker.size * 2) + " " + (marker.size * 2)}
			      refX={marker.size}
			      refY={marker.size}
			      markerWidth={marker.size}
			      markerHeight={marker.size}
			  >
			  	{marker.marker}
				</marker>
		  )
		});
	}

	return (
		<svg style={{position: "absolute", top: "0px", left: "0px",}} width={800} height={1300}>
			<def>
				{markers}
			</def>
			{makeBG()}
			{groups}
		</svg>
	);
}


// this class renders an animated <svg> image, interpolating between keyframes
// behaviour of this interpolation depends on loopmode property
export class SVGMorgrifier extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			interpVal: 0.,
			internalClock: 0.,
			isGoingForward: true,
		}
	}

	tick() {
		
		let newInternalClock = this.state.internalClock;
		let isGoingForward = this.state.isGoingForward;
		let loopmode = this.props.loopMode ? this.props.loopMode : "back-and-forth-with-pause";
		switch(loopmode)
			{
			case "forward-only":
				if (newInternalClock >= 1.) newInternalClock = 0.;
				break;
			case "back-and-forth":
				if (newInternalClock >= 1.) isGoingForward = false;
				if (newInternalClock <= 0.) isGoingForward = true;
				break;
			case "back-and-forth-with-pause":
			default:
				if (newInternalClock >= 1.5) isGoingForward = false;
				if (newInternalClock <= -0.5) isGoingForward = true;
				break;
			}

		newInternalClock = this.state.internalClock + (isGoingForward ? 0.01 : -0.01);
		let newInterpVal = Math.max(newInternalClock, 0.);
		newInterpVal = Math.min(newInterpVal, 1.);

		this.setState({
			internalClock: newInternalClock,
			interpVal: newInterpVal,
			isGoingForward: isGoingForward,
		});
	}

  componentDidMount() {
	  this.timerID = setInterval(
	  	() => this.tick(),
	  	16
	  );
	}
	componentWillUnmount() {
    clearInterval(this.timerID);
  }

	render()
	{
		const start = this.props.inputObject.renderGroups[0];
		const end = this.props.inputObject.renderGroups[1];
		function linerpGroups(start, end, linerpVal) {
			let newGroup = {
				id: "interpolatedGroup",
				points: ""
			};

			return newGroup;
		}

		function linerpPoint(point1, point2, linerpVal)
		{
			return {
				x: point1.x * (1. - linerpVal) + point2.x * linerpVal,
				y: point1.y * (1. - linerpVal) + point2.y * linerpVal, 
			};
		}

		const interpolatedGroup = linerpGroups(start, end, this.state.interpVal);
		
		return (
			<SVGImage inputObject={
				{
					meta: this.props.inputObject.meta,
					renderGroups: [interpolatedGroup],
				}
			} />
		);
	}
}


