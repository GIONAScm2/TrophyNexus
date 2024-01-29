import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {stripIndent} from 'common-tags';
import ConcatSource from 'webpack-sources';
import webpack from 'webpack';
const {Compilation} = webpack;

class BannerAfterMinimizePlugin {
	constructor({banner = '', raw = true}) {
		this.raw = raw;
		this.banner = raw ? banner : `/*${banner}*/`;
	}
	apply(compiler) {
		compiler.hooks.thisCompilation.tap('BannerAfterMinimizePlugin', compilation => {
			compilation.hooks.processAssets.tap(
				{
					name: 'BannerAfterMinimizePlugin',
					stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
				},
				assets => {
					for (const assetName of Object.keys(assets)) {
						compilation.updateAsset(assetName, old => new ConcatSource.ConcatSource(this.banner, '\n', old));
					}
				}
			);
		});
	}
}

/**
 * @type {import('webpack').Configuration}
 */
const config = {
	entry: `./src/main.tsx`,
	output: {
		filename: `TrophyNexus.user.js`,
		path: path.resolve(__dirname, `dist`),
		pathinfo: false,
	},
	mode: `development`,
	devtool: false,
	cache: {type: `memory`, cacheUnaffected: true},
	experiments: {
		futureDefaults: true,
	},
	resolve: {
		/** If fileName.ts and fileName.js both exist, only the former will be resolved.
		 * This is why imports don't need to specify an extension. */
		extensions: [`.tsx`, `.ts`, `.js`],
		modules: [path.join(__dirname, `node_modules`)],
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			react: 'preact/compat',
			'react-dom/test-utils': 'preact/test-utils',
			'react-dom': 'preact/compat', // Must be below test-utils
			'react/jsx-runtime': 'preact/jsx-runtime',
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: `ts-loader`,
						options: {
							transpileOnly: true,
						},
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new BannerAfterMinimizePlugin({
			banner: stripIndent`
			// ==UserScript==
			// @name         TrophyNexus
			// @author       GIONAScm2
			// @run-at       document-start
			// @namespace    https://github.com/GIONAScm2/TrophyNexus
			// @description  I love trophies, and with this script, so will you
			// @version      1.6.0
			// @downloadURL  https://github.com/GIONAScm2/TrophyNexus/raw/main/TrophyNexus.user.js
			// @updateURL    https://github.com/GIONAScm2/TrophyNexus/raw/main/TrophyNexus.user.js	
			// @match        https://psnprofiles.com/*
			// @match        https://forum.psnprofiles.com/*
			// @match        https://www.trueachievements.com/*
			// @match        https://www.truetrophies.com/*
			// @connect      cloudfunctions.net
			// @noframes
			// @grant        unsafeWindow
			// @grant        window.onurlchange
			// @grant        GM.getValue
			// @grant        GM.setValue
			// @grant        GM.deleteValue
			// @grant        GM.addValueChangeListener
			// @grant        GM.removeValueChangeListener
			// @grant        GM.xmlHttpRequest
			// @grant        GM.notification
			// @grant        GM.listValues
			// ==/UserScript==`,
			raw: true, // (Banner is already commented)
		}),
	],
};
export default config;
