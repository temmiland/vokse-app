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

//#endregion

//#region Component - Account

type AccountProps = {}

const Account: FC<AccountProps> = () => {

	const firstName = useSelector((state: any) => state.account.firstName);
	const dispatch = useDispatch();

	return (
		<View>
			<ThemedText style={{fontSize: 14, fontWeight: 600, marginTop: 8, marginBottom: 5 }}>
					First Name
			</ThemedText>
			<ThemedTextInput
				value={ firstName }
				onChangeText={ (text) => dispatch(changeFirstName(text)) }
				spellCheck={ false }
				textContentType='givenName'
			/>
		</View>
	);
}

export default Account;

//#endregion
