/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

//#region Imports

import { ComponentProps, FC } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming
} from 'react-native-reanimated';

import { FontAwesome6 } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

//#endregion

//#region Component

interface TabBarProps extends IconProps<ComponentProps<typeof FontAwesome6>['name']> {
	focused: boolean,
}

const TabBarIcon: FC<TabBarProps> = ({ focused, ...rest }) => {

	const scaleAnimation = useSharedValue(1);

	if (focused) {
        scaleAnimation.value = withRepeat(
            withSequence(withTiming(1.2, { duration: 150 }), withTiming(1, { duration: 150 })),
            1
        );
    } else {
        scaleAnimation.value = 1; // Reset to default when not focused
    }

	const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scaleAnimation.value }],
    }));

	return (
		<Animated.View style={focused ? animatedStyle : {}}>
			<FontAwesome6 size={22} style={[styles.tabBarIcon]} {...rest} />
		</Animated.View>
	);
}

export default TabBarIcon;

//#endregion

//#region Styles

let styles: any;

switch (Platform.OS) {
	case 'web':
		styles = StyleSheet.create({
			tabBarIcon: {
				marginTop: -3
			}
		});
		break;
	case 'ios':
		styles = StyleSheet.create({
			tabBarIcon: {
				marginTop: 10
			}
		});
		break;
	case 'android':
		styles = StyleSheet.create({
			tabBarIcon: {
				marginTop: 10
			}
		});
		break;
	default:
		styles = StyleSheet.create({});
		break;
}

//#endregion
