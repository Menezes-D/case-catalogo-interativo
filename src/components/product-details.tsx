import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import { styles } from '../styles/product-details-style'

//Definição dos tipos de dados que iremos receber da API
type ProductDetails = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  brand: string;
}

export default function ProductDetails() {
  const router = useRouter()

  //Obtém os parâmetros da URL (nesse caso, o ID do produto)
  const params = useLocalSearchParams()
  const { id } = params

  const [product, setProduct] = useState<ProductDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Pequena validação, para evitar busca caso o ID não exista
    if (!id) return; 
    fetchProductDetails(id);
  }, [id]);

  const fetchProductDetails = async (productId: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dummyjson.com/products/${productId}`)
      setProduct(response.data)
    } catch (error) {
      alert('Erro ao carregar detalhes do produto');
    } finally {
      setLoading(false)
    }
  }

  // Função para voltar para a tela de login
  const handleLogout = () => {
    router.replace('/');
  }

  // Função para voltar ate o catalogo(HOME)
  const handleHome = () => {
    router.replace('/products');
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#007AFF" style={{ flex: 1, justifyContent: 'center' }} />
  }

  // Caso não encontre o produto, mostra mensagem de erro
  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.brand}>Marca: {product.brand}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>

        {/* Botões de Navegação */}
       <View>

        {/*Voltar para o catalogo*/}
        <TouchableOpacity style={[styles.logoutButton, {backgroundColor: '#007AFF'}]} onPress={handleHome}>
          <Text style={styles.logoutButtonText}>Home</Text>
        </TouchableOpacity>

        {/*Fazer logout e voltar para a tela de Login */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
