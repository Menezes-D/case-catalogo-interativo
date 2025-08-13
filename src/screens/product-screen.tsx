import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import axios from 'axios'
import { styles } from '../styles/products-style'

//Tipo de produtos a serem carregados
type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}
//Constantes para representar as categorias que existem na API
const CATEGORIES = {
  MASCULINO: 'mens-shirts',
  FEMININO: 'womens-dresses',
};

export default function ProductsScreen() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  //Categoria selecionada por padrão -> masculino
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.MASCULINO);

  //Sempre que a categoria mudar, vai buscar os produtos novamente
  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = async (category: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      setProducts(response.data.products);
    } catch (error) {
      alert('Erro ao carregar produtos');
    } finally {
      setLoading(false); //Oculta o carregamento
    }
  };

  //Logout- Volta para a tela de Login
  const handleLogout = () => {
    router.replace('/'); 
  };
    //Home- volta para pagina de categorias, por padrão a masculina
  const goHome = () => {
    setSelectedCategory(CATEGORIES.MASCULINO); 
  };

  // Navegar para a tela de detalhes do produto
  const goToDetails = (id: number) => {
    router.push(`/products/${id}`);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => goToDetails(item.id)}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       {/* Abas de seleção de categoria */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedCategory === CATEGORIES.MASCULINO && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedCategory(CATEGORIES.MASCULINO)}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedCategory === CATEGORIES.MASCULINO && styles.tabButtonTextActive,
            ]}
          >
            Masculino
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedCategory === CATEGORIES.FEMININO && styles.tabButtonActive,
          ]}
          onPress={() => setSelectedCategory(CATEGORIES.FEMININO)}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedCategory === CATEGORIES.FEMININO && styles.tabButtonTextActive,
            ]}
          >
            Feminino
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de produtos ou carregando */}
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      )}

      {/* Botão logout */}
            <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.homeButton} onPress={goHome}>
          <Text style={styles.logoutButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
