/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type CardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function Card({ style, lightColor, darkColor, ...otherProps }: CardProps) {
	const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'secondaryBackground');

	return <View style={[{ backgroundColor, borderRadius: 20, padding: 15 }, style]} {...otherProps} />;
}
