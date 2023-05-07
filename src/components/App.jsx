import React, { useEffect } from 'react';
import Visualization from './Visualization';
import helper from '../helper';

export default function App() {

	const usable = useRef({});
	
	// load the list of usable Packages from the available assets
	useEffect(() => {
		const assets = import.meta.glob('/public/pkg/assets/*');

		// generate thumbnails for assets used in Packages
		Object.keys(assets).forEach((asset) => {
			// [TODO] now, all packages are passed to the Visualization,
			// but this leaves open the possibility to only select a
			// subset of packages to provide the user (ex. if a user
			// only wanted to work with audio clips or packages linked
			// to an account, etc.)
			if (!(asset in usable)) {
				usable[asset] = helper.generateThumbnail(asset);
			}
		});
	});

	return (
		<div id="component-app">
			<div id="component-app-header">
				<h1>dream.viz</h1>
				<h2>dream insantiation: real-time, right now</h2>
			</div>

			<Visualization packages={usable} />
		</div>
	);
}