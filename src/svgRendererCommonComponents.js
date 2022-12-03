import React from 'react';
import ReactDOM from 'react-dom/client';

// everything that follows is the pure <svg> kingdom
// enter only if you recognise the risks (to your sanity)

// this component is responsible for drawing a single group of svg elements 
export function SVGGroup(props)
{
	const group = props.group;
	const style = props.group.style ?? {};

	let groupUniqueId = 0;
	let uniqueId = () => {
		return groupUniqueId++;
	};

	let scaleValue = (value) => {
		return (style.scale ?? 1) * (value ?? 1);
	};

	let preprocessPoint = (pointId) => {
		const point = group.points[pointId];
		return {x: scaleValue(point.x), y: scaleValue(point.y)}
	}

	let renderGraphNode = (nodeObj) => {
		return (
			<GraphNode
				key={"node-"+uniqueId()}
				point= {preprocessPoint(nodeObj)}
				style={style.nodes ?? {}}
			/>
		);
	}

	let renderGraphEdge = (edgeObj) => {
		return (
			<GraphEdge
				key={"edge-"+uniqueId()}
				start= {preprocessPoint(edgeObj.start)}
				end= {preprocessPoint(edgeObj.end)}
				style={style.edges ?? {}}
			/>
		);
	}

	let renderGraphBezier = (bezierObj) => {
		return (
			<GraphBezier
				key={"bezi-"+uniqueId()}
				start= {preprocessPoint(bezierObj.start)}
				tangent= {preprocessPoint(bezierObj.tangent)}
				end= {preprocessPoint(bezierObj.end)}
				style={style.beziers ?? {}}
			/>
		);
	}

	let graphElements = [];
	let globalId = 0;

	if (group.nodes) {
		group.nodes.forEach((node) => {
			graphElements.push(renderGraphNode(node));
		});
	}

	if (group.edges) { 
		group.edges.forEach((edge) => {
			graphElements.push(renderGraphEdge(edge));
		});
	}

	if (group.beziers) { 
		group.beziers.forEach((bezier) => {
			graphElements.push(renderGraphBezier(bezier));
		});
	}

	return (
		<g
			opacity={group.opacity??1}
			transform={group.transform ?? ""}
		>
		{graphElements}
		</g>);
}

// the following are low level components, responsible for rendering a single element of an svg group
// default values for missing properties are filled on this level
function makeMarker(markerId)
{
	if (markerId) return "url(#" + markerId + ")";
	else return "none";
}

function GraphNode(props)
{
	return (
		<circle
			cx={props.point.x}
			cy={props.point.y}
			r={props.style.size ?? "1"}
			fill={props.style.color ?? "#000"}
		/>
	);
}

function GraphEdge(props)
{
	return (
		<line
			x1={props.start.x}
			y1={props.start.y}
			x2={props.end.x}
			y2={props.end.y}
			markerStart={makeMarker(props.style.markerStart)}
			markerEnd={makeMarker(props.style.markerEnd)}
			strokeWidth={props.style.size ?? "1"}
			stroke={props.style.color ?? "#000"}
		/>
	);
}

function GraphBezier(props)
{
	const start = props.start.x + "," + props.start.y;
	const tangent = props.tangent.x + "," + props.tangent.y;
	const end = props.end.x + "," + props.end.y;
	return (
		<path
			d={"M " + start + " Q " + tangent + " " + end}
			fill={props.style.fill ?? "none"}
			stroke={props.style.color ?? "#000"}
			strokeWidth={props.style.size ?? "1"}
			markerStart={makeMarker(props.style.markerStart)}
			markerEnd={makeMarker(props.style.markerEnd)}
		/>
	);
}