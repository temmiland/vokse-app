/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import React, { FC } from 'react';

import VokseView from '@/components/navigation/VokseView';
import { ThemedText } from '@/components/ThemedText';
import { useSelector } from 'react-redux';

//#endregion

//#region Component

type IndexTabProps = {};

const IndexTab: FC<IndexTabProps> = () => {

	const firstName = useSelector((state: any) => state.account.firstName);

	return (
		<VokseView title={firstName ? 'Hei, ' + firstName + '!' : 'Hei!'}>
			<ThemedText type='default'>Todo</ThemedText>
		</VokseView>
	);
}

export default IndexTab;

//#endregion
