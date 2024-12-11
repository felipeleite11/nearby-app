import { useEffect, useState } from "react"
import { View, Alert } from "react-native"
import { api } from "@/services/api"
import { Categories, CategoriesProps } from "@/components/categories"
import { PlaceProps } from "@/components/Place"
import { Places } from "@/components/places"

type MarketProps = PlaceProps & {}

export default function Home() {
	const [categories, setCategories] = useState<CategoriesProps>([])
	const [markets, setMarkets] = useState<MarketProps[]>([])
	const [category, setCategory] = useState('')

	async function fetchCategories() {
		try {
			const { data } = await api.get('categories')

			setCategories(data)
			setCategory(data[0].id)
		} catch(e) {
			console.log(e)

			Alert.alert('Categorias', 'Não foi possível carregar as categorias.')
		}
	}

	async function fetchMarkets() {
		try {
			if(!category) {
				return
			}

			const { data } = await api.get<MarketProps[]>(`markets/category/${category}`)

			setMarkets(data)
		} catch(e) {
			console.log(e)

			Alert.alert('Locais', 'Não foi possível carregar os locais.')
		}
	}

	useEffect(() => {
		fetchCategories()
	}, [])

	useEffect(() => {
		fetchMarkets()
	}, [category])

	return (
		<View style={{ flex: 1, backgroundColor: '#ddd' }}>
			<Categories 
				data={categories} 
				onSelect={setCategory} 
				selected={category} 
			/>

			<Places data={markets} />
		</View>
	)
}