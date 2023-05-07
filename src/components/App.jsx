import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Visualization from './Visualization';
import helper from '../helper';
import PackStack from './PackStack';

export default function App() {

	const usable = useRef({});
	// const pkgs = useRef([]);
	
	// // load the list of usable Packages from the available assets
	useEffect(() => {
	// 	async function getPkgUrls() {
	// 		let res = await fetch('/api/media');
	// 		response = response.json();

	// 		// console.log(response);

		const assets = import.meta.glob('/assets/media/*', { as: 'url', eager : true });

		console.log(assets);

			// generate thumbnails for assets used in Packages
			Object.keys(assets).forEach((asset) => {
				// [TODO] now, all packages are passed to the Visualization,
				// but this leaves open the possibility to only select a
				// subset of packages to provide the user (ex. if a user
				// only wanted to work with audio clips or packages linked
				// to an account, etc.)
				if (!(asset in usable.current)) {
					usable.current[asset] = {
						thumbnail : helper.generateThumbnail(asset),
					};
				}
			});
	// 	}

	// 	getPkgUrls();
	});

	return (
		<div id="component-app">
			<div id="component-app-header">
				<h1>dream.ViZ</h1>
				<h2>Version Zero</h2>
			</div>

			<Container id="component-app-body">
				<Row>
					<Col><Visualization /></Col>
					<Col><PackStack packages={ usable.current } /></Col>
				</Row>
			</Container>
		</div>
	);
}