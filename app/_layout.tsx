/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import React from 'react';

import 'react-native-reanimated';

import * as NavigationBar from 'expo-navigation-bar';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { FC, useEffect, useState } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Appearance, Platform } from 'react-native';

//#endregion

//#region Utilities

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

//#endregion

//#region Component

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = () => {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	useEffect(() => {
		const subscription = Appearance.addChangeListener(({ colorScheme }) => {
			if(Platform.OS === "android") {
				NavigationBar.setBackgroundColorAsync(colorScheme === "dark" ? "#121212" : "#ffffff")
			}
		});

		return () => subscription.remove();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}

export default RootLayout;

//#endregion
