/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import React, { FC } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import TabBarIcon from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

//#endregion

//#region Component

type TabLayoutProps = {};

const TabLayout: FC<TabLayoutProps> = () => {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					shadowColor: Platform.OS === 'ios' ? Colors[colorScheme ?? 'light'].tint : '',
					shadowOpacity: 0.15,
					shadowRadius: 20,
				},
				tabBarBackground: () => (
					Platform.OS === 'ios' ? (
						<BlurView intensity={80} tint="light" style={{
							...StyleSheet.absoluteFillObject,
							borderTopRightRadius: 20,
							borderTopLeftRadius: 20,
							borderTopWidth: 0,
							overflow: 'hidden',
							backgroundColor: 'transparent'
						}} />
					) : (
						<View style={{
							backgroundColor: Colors[colorScheme ?? 'light'].androidTabBarBackground,
							...StyleSheet.absoluteFillObject,
							borderTopRightRadius: 20,
							borderTopLeftRadius: 20,
							borderTopWidth: 0,
							overflow: 'hidden',
						}} />
					)
				),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon focused={focused} name={'house'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="plants"
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon focused={focused}  name={'seedling'} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: '',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon focused={focused}  name={'gear'} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}

export default TabLayout;

//#endregion
