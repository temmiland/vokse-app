/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { Link, Stack } from 'expo-router';
import { FC } from 'react';

import VokseView from '@/components/navigation/VokseView';
import { ThemedText } from '@/components/ThemedText';

//#endregion

//#region Component

type NotFoundScreenProps = {};

const NotFoundScreen: FC<NotFoundScreenProps> = () => {

	return (
		<>
			<Stack.Screen options={{title: '', headerShown: false }}/>
			<VokseView title="Oops!">
				<ThemedText type="default">This screen doesn't exist.</ThemedText>
				<Link href="/">
					<ThemedText type="link">Go to home screen!</ThemedText>
				</Link>
			</VokseView>
		</>
	);
}

export default NotFoundScreen;

//#endregion
