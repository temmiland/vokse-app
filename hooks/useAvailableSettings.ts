/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { Platform } from 'react-native';

import AppIcon from '@/components/settings/AppIcon';

//#endregion

//#region Hook

export function useAvailableSettings() {

	const registry: SettingsRegistry[] = [
		{
			title: 'App Icon',
			platforms: ['ios', 'android'],
			component: AppIcon
		}
	]

	return registry.filter(reg => reg.platforms.includes(Platform.OS));
}

//#endregion
