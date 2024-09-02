/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { FC } from 'react';

import Card from '@/components/card/Card';
import VokseView from '@/components/navigation/VokseView';
import { useAvailableSettings } from '@/hooks/useAvailableSettings';
import { ThemedText } from '@/components/ThemedText';

//#endregion

//#region Component

type SettingsTabProps = {};

const SettingsTab: FC<SettingsTabProps> = () => {

	const availableSettings: SettingsRegistry[] = useAvailableSettings();

	return (
		<VokseView title="Settings">
			{
				availableSettings.map((availableSetting, i) => {
					const Component = availableSetting.component;
					return (
						<Card key={i}>
							<ThemedText type="subtitle">{availableSetting.title}</ThemedText>
							<Component />
						</Card>
					);
				})
			}
		</VokseView>
	);
}

export default SettingsTab;

//#endregion
