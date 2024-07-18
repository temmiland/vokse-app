/**
 * Copyright (C) 2024 Temmi Pietsch - All Rights Reserved
 *
 * You may not use, distribute or modify this code without the explicitly
 * permission of the author.
 */

import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

let styles: any;

switch (Platform.OS) {
	case 'web':
		styles = StyleSheet.create({
			heading: {
				flexDirection: 'row',
				alignItems: 'center',
				gap: 6,
			  },
			  content: {
				marginTop: 6,
				marginLeft: 24,
			  },
		});
		break;
	case 'ios':
		styles = StyleSheet.create({
			heading: {
				flexDirection: 'row',
				alignItems: 'center',
				gap: 6,
			  },
			  content: {
				marginTop: 6,
				marginLeft: 24,
			  },
		});
		break;
	case 'android':
		styles = StyleSheet.create({
			heading: {
				flexDirection: 'row',
				alignItems: 'center',
				gap: 6,
			  },
			  content: {
				marginTop: 6,
				marginLeft: 24,
			  },
		});
		break;
	default:
		styles = StyleSheet.create({
			heading: {
				flexDirection: 'row',
				alignItems: 'center',
				gap: 6,
			  },
			  content: {
				marginTop: 6,
				marginLeft: 24,
			  },
		});
		break;
}
