/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

//#endregion

//#region Component

type VokseViewProps = {
	title: string,
	children: any
};

const VokseView: FC<VokseViewProps> = ({ title, children }) => {

	return (
		<ThemedView style={ styles.outerView }>
			<ThemedView
				style={ styles.innerView }
			>
				<ThemedView style={ styles.titleView }>
					<ThemedText type="title">{ title }</ThemedText>
				</ThemedView>
				<ThemedView style={ styles.contentView }>
					{ children }
				</ThemedView>
			</ThemedView>
		</ThemedView>
	);
}

export default VokseView;

//#endregion

//#region Styles

let styles: any;

switch (Platform.OS) {
	case 'web':
		styles = StyleSheet.create({
			outerView: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			},
			innerView: {
				zIndex: 99999,
				width: '100%',
				position: 'absolute',
				top: 0,
			},
			titleView: {
				top: 30,
				paddingLeft: 30,
				paddingRight: 30
			},
			contentView: {
				top: 55,
				paddingLeft: 30,
				paddingRight: 30
			},
		});
		break;
	case 'ios':
		styles = StyleSheet.create({
			outerView: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			},
			innerView: {
				zIndex: 99999,
				width: '100%',
				position: 'absolute',
				top: 0,
			},
			titleView: {
				top: 100,
				paddingHorizontal: 20,
			},
			contentView: {
				top: 125,
				paddingHorizontal: 20,
			},
		});
		break;
	case 'android':
		styles = StyleSheet.create({
			outerView: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			},
			innerView: {
				zIndex: 99999,
				width: '100%',
				position: 'absolute',
				top: 0,
			},
			titleView: {
				top: 100,
				paddingLeft: 20,
				paddingRight: 20
			},
			contentView: {
				top: 125,
				paddingLeft: 20,
				paddingRight: 20
			},
		});
		break;
	default:
		styles = StyleSheet.create({
			outerView: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			},
			innerView: {
				zIndex: 99999,
				width: '100%',
				position: 'absolute',
				top: 0,
			},
			titleView: {
				top: 100,
				paddingLeft: 20,
				paddingRight: 20
			},
			contentView: {
				top: 125,
				paddingLeft: 20,
				paddingRight: 20
			},
		});
		break;
}

//#endregion
