import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from 'react-native'
import { IconProps as TablerIconProps } from '@tabler/icons-react-native'
import { s } from "./styles"
import { colors } from '@/styles/colors'
import React from 'react'

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...props }: ButtonProps) {
	return (
		<TouchableOpacity 
			activeOpacity={0.8} 
			style={[s.container, style]}
			disabled={isLoading}
			{...props}
		>
			{isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
		</TouchableOpacity>
	)
}

function Title({ children, style, ...props }: TextProps) {
	return (
		<Text 
			style={[s.title, style]} 
			{...props}
		>
			{children}
		</Text>
	)
}

type IconProps = {
	icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
	return (
		<Icon size={24} color={colors.gray[100]} />
	)
}

Button.Title = Title
Button.Icon = Icon

export {
	Button
}