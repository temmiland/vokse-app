/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { FC } from 'react';

import VokseView from '@/components/navigation/VokseView';
import { ThemedText } from '@/components/ThemedText';

//#endregion

//#region Component

type PlantsTabProps = {};

const PlantsTab: FC<PlantsTabProps> = () => {

	return (
		<VokseView title="Plants">
			<ThemedText type='default'>Todo</ThemedText>
		</VokseView>
	);
}

export default PlantsTab;

//#endregion
