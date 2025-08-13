import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2563EB',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
   header: {
    width: '100%',
    height: 200,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: '#2563EB',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center'
  },
  headerSubtitle: {
    color: '#E0E7FF',
    fontSize: 14,
    textAlign: 'center'
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '70%',
    marginTop: -40,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000000ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#374151',
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
  },
  button: {
    backgroundColor: '#2563EB',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
