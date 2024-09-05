/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { Platform } from 'react-native';

import Account from '@/components/settings/Account';
import AppIcon from '@/components/settings/AppIcon';
import Info from '@/components/settings/Info';

//#endregion

//#region Hook

export function useAvailableSettings() {

	const registry: SettingsRegistry[] = [
		{
			title: 'My Account',
			platforms: ['ios', 'android'],
			component: Account
		},
		{
			title: 'App Icon',
			platforms: ['ios', 'android'],
			component: AppIcon
		},
		{
			title: 'Info',
			platforms: ['ios', 'android'],
			component: Info
		}
	]

	return registry.filter(reg => reg.platforms.includes(Platform.OS));
}

//#endregion
