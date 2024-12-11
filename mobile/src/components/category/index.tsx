import { PressableProps, Text, Pressable } from "react-native"
import { s } from "./styles"
import { categoriesIcons } from "@/utils/categories-icons"
import { colors } from "@/styles/theme"

type Props = PressableProps & {
	iconId: string
	isSeleted?: boolean
	name: string
}

export function Category({ iconId, name, isSeleted = false, ...props }: Props) {
	const Icon = categoriesIcons[iconId]
	
	return (
		<Pressable 
			style={[s.container, isSeleted && s.containerSelected]} 
			{...props}
		>
			<Icon size={16} color={colors.gray[isSeleted ? 100 : 400]} />
			<Text style={[s.name, isSeleted && s.nameSelected]}>{name}</Text>
		</Pressable>
	)
}