import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const cardWidth = windowWidth / 2 - 30;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center'
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginHorizontal: 10,
  },
  tabButtonActive: {
    backgroundColor: '#007AFF',
  },
  tabButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  tabButtonTextActive: {
    color: '#fff',
  },

  productCard: {
    width: cardWidth,
    backgroundColor: '#8AB6D9FF', 
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 7,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 15
  },
  productTitle: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 13,
    color: '#007AFF',
  },

  logoutButton: {
    marginTop: 10,
    backgroundColor: '#db241aff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },
  footerButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: 20,
  left: 20,
  right: 20,
},
homeButton: {
  backgroundColor: '#007AFF',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
},

});
