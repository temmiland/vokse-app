/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { FC, useReducer, useState } from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';

import { ThemedText } from '../ThemedText';
import EmptyModule from './EmptyModule';

// Dynamic import of the native module "expo-dynamic-app-icon".
let ExpoDynamicAppIconModule;
let setAppIcon: (iconName: string) => void;
let getAppIcon: () => string;

if (Platform.OS === 'ios' || Platform.OS === 'android') {
  ExpoDynamicAppIconModule = require('@temmiland/expo-dynamic-app-icon');
  setAppIcon = ExpoDynamicAppIconModule.setAppIcon;
  getAppIcon = ExpoDynamicAppIconModule.getAppIcon;
}

// AppIcon imports
const appIcons = [
	require('@/assets/images/app-icons/skin_tone_1.png'),
	require('@/assets/images/app-icons/skin_tone_2.png'),
	require('@/assets/images/app-icons/skin_tone_3.png'),
	require('@/assets/images/app-icons/skin_tone_4.png'),
	require('@/assets/images/app-icons/skin_tone_5.png')
]

//#endregion

//#region Component - AppIconSkinToneItem

type AppIconSkinToneItemProps = {
	iconName: string,
	iconSource: any,
	forceUpdate: Function,
	viewWidth: number,
	itemCount: number
}

const AppIconSkinToneItem: FC<AppIconSkinToneItemProps> = ({
	iconName,
	iconSource,
	forceUpdate,
	viewWidth,
	itemCount
}) => {
	const colorScheme = useColorScheme();
	
	// fix for a rerender problem in android
	return viewWidth > 0
		? (
			<TouchableOpacity
				onPress={ () => {
					setAppIcon(iconName);
					forceUpdate();
				}}
			>
				<Image
					source={ iconSource }
					style={{
						/*
							height and width of the image is calculated with the available space from
							AppIconSkinTone and the number of icons to generate. To calculate the real
							width and height for this image, we need to subtract the marginHorizontal
							(2+2) as well as a tolerance (+1=5) from the available width of the view.
						*/
						height: (viewWidth - (itemCount * 5)) / itemCount,
						width: (viewWidth - (itemCount * 5)) / itemCount,
						borderColor: getAppIcon() === iconName
							? Colors[colorScheme ?? 'light'].tint
							: Colors[colorScheme ?? 'light'].tabIconDefault,
							marginVertical: 5,
						// when changing this prop, make sure you update the height and width formula.
						marginHorizontal: 2,
						borderWidth: 2,
						borderRadius: 15
					}}
				/>
			</TouchableOpacity>
		)
		: (
			<></>
		);
}

//#endregion

//#region Component - AppIconSkinTone
	
type AppIconSkinToneProps = {}

const AppIconSkinTone: FC<AppIconSkinToneProps> = () => {
	// handle forceUpdate here to refresh each child, when the user changes to another icon
	const [, forceUpdate] = useReducer(x => x + 1, 0);
	const [viewWidth, setViewWidth] = useState(0);

	const onLayout = (event: any) => {
		const { width } = event.nativeEvent.layout;
		if (viewWidth < width) {
		  setViewWidth(width);
		}
	}

	return (
			<ThemedText onLayout={ onLayout }>
				{
					[...Array(5).keys()].map((it, i, a) => (
							<AppIconSkinToneItem
								key={i}
								iconName={`skin_tone_${it+1}`}
								iconSource={appIcons[it]}
								forceUpdate={forceUpdate}
								viewWidth={ viewWidth }
								itemCount={ a.length }
							/>
					))
				}
			</ThemedText>
	);
}

export default ExpoDynamicAppIconModule ? AppIconSkinTone : EmptyModule;

//#endregion
