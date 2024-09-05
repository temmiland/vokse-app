/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

import React from 'react';
import { StyleSheet, TextInput, TextInputProps, useColorScheme } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextInputProps) {
	const colorScheme = useColorScheme();
	const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

	return (
		<TextInput
		style={[
			{ color },
			{ backgroundColor: Colors[colorScheme ?? 'light'].tertiaryBackground },
			type === 'default' ? styles.default : undefined,
			style,
		]}
		{...rest}
		/>
	);
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
	padding: 10,
	borderRadius: 10,
  }
});
