/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { FC, useReducer, useState } from 'react';
import { Image, Platform, TouchableOpacity, useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';

import { ThemedText } from '../ThemedText';
import EmptyModule from './EmptyModule';
import { ThemedView } from '../ThemedView';
import React from 'react';

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
	require('@/assets/images/app-icons/skin_tone_1_256.png'),
	require('@/assets/images/app-icons/skin_tone_2_256.png'),
	require('@/assets/images/app-icons/skin_tone_3_256.png'),
	require('@/assets/images/app-icons/skin_tone_4_256.png'),
	require('@/assets/images/app-icons/skin_tone_5_256.png'),
]

//#endregion

//#region Component - AppIconItem

type AppIconItemProps = {
	iconName: string,
	iconSource: any,
	forceUpdate: Function,
	viewWidth: number,
	itemCount: number
}

const AppIconItem: FC<AppIconItemProps> = ({
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
							|| iconName === 'skin_tone_3' && getAppIcon() === 'DEFAULT'
								? Colors[colorScheme ?? 'light'].tint
								: '',
							marginVertical: 5,
						// when changing this prop, make sure you update the height and width formula.
						marginHorizontal: 2,
						borderWidth: getAppIcon() === iconName
							|| iconName === 'skin_tone_3' && getAppIcon() === 'DEFAULT'
								? 2
								: 0,
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

//#region Component - AppIcon
	
type AppIconProps = {}

const AppIcon: FC<AppIconProps> = () => {
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
		<>
			<ThemedView onLayout={ onLayout }>
				<ThemedText style={{fontSize: 14, fontWeight: 600, marginVertical: 5 }}>
					Skin tone options
				</ThemedText>
				<ThemedText style={{fontSize: 14, marginBottom: 5 }}>
					These icon sets allow you to customize the app icon to your preferred appearance.
				</ThemedText>
				<ThemedView style={{ flexDirection: 'row' }}>
					{
						[...Array(5).keys()].map((it, i, a) => (
								<AppIconItem
									key={i}
									iconName={`skin_tone_${it+1}`}
									iconSource={appIcons[it]}
									forceUpdate={forceUpdate}
									viewWidth={ viewWidth }
									itemCount={ a.length }
								/>
						))
					}
				</ThemedView>
				{
					Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 18
					? (
						<>
							<ThemedText style={{fontSize: 14, marginVertical: 5 }}>
								All icon sets support the new tinted icons!
							</ThemedText>
						</>
					)
					: ''
				}
				{
					Platform.OS === "android" && Platform.Version >= 33
					? (
						<>
							<ThemedText style={{fontSize: 14, marginVertical: 5 }}>
								All icon sets support the monochrome icon style!
							</ThemedText>
						</>
					)
					: ''
				}
			</ThemedView>
		</>
	);
}

export default ExpoDynamicAppIconModule ? AppIcon : EmptyModule;

//#endregion
