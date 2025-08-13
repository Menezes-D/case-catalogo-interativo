import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#8AB6D9FF',
    borderRadius: 15,
    marginTop: 70,
    margin:20
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  brand: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  price: {
    fontSize: 20,
    color: '#007AFF',
    marginTop: 10,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});
