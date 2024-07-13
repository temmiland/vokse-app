/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { FC } from 'react';

import { Collapsible } from '@/components/Collapsible';
import VokseView from '@/components/navigation/VokseView';
import { useAvailableSettings } from '@/hooks/useAvailableSettings';

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
						<Collapsible key={i} title={availableSetting.title}>
							<Component />
						</Collapsible>
					);
				})
			}
		</VokseView>
	);
}

export default SettingsTab;

//#endregion
