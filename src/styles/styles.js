import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color:'#ccc',
  },
  input: {
    width: '100%',
    color: '#ccc',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 20,
    borderRadius: 5,
    fontSize:18,
  },  
  loginButton: {
    width: '100%',
    backgroundColor: '#ccc', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 18,
  },
  loginText: {
    color: '#000000',  
    fontSize: 20,
    fontWeight: 'bold',
  },
});
