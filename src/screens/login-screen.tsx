// app/index.tsx
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/login-style';

export default function LoginScreen() {
  const router = useRouter();

  //Estados para armazenar os valores de login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Função para validar o login
  const handleLogin = () => {
    //Verifica se todos os campos foram preenchidos
    if (!username || !password) {
      alert('Preencha todos os campos!');
      return;
    }
    //Verifica se as credenciais estão corretas
    if (username === 'Admin' && password === 'Admin') {
      router.push('/products');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem-vindo de volta!</Text>
        <Text style={styles.headerSubtitle}>Insira seus dados para entrar na sua conta.</Text>
        </View>

        <View style={styles.formContainer}>
            <Text style={styles.label}>Usuário</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry //Oculta a senha digitada
            />
            {/*Botão de Login */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
