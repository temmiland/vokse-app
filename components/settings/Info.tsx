/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import React from 'react';

import { FC } from 'react';
import { useColorScheme, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { changeFirstName } from '@/redux/accountSlice';
import { ThemedText } from '../ThemedText';
import { ThemedTextInput } from '../ThemedTextInput';
import * as Application from 'expo-application';

//#endregion

//#region Component - Info

type InfoProps = {}

const Info: FC<InfoProps> = () => {

	const firstName = useSelector((state: any) => state.account.firstName);
	const dispatch = useDispatch();

	return (
		<View>
			<ThemedText style={{fontSize: 14, marginTop: 8, marginBottom: 5 }}>
					App Version: {Application.nativeApplicationVersion}
					{'\n'}
					Build Number: {Application.nativeBuildVersion}
			</ThemedText>
		</View>
	);
}

export default Info;

//#endregion
