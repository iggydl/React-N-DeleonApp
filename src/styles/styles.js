// In your styles file (e.g., styles.js)
import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
  },
  formHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Adjust color as needed
    position: 'absolute', // Position the header absolutely
    top: 50, // Adjust the top position as needed
  },
  formContainer: {
    position: 'absolute', // Position the form container absolutely
    bottom: 0, // Align to the bottom
    left: 0,
    right: 0,
    backgroundColor: 'white', // Semi-transparent background
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    height: '50%',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white', // Background for tabs
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10, // Space between tabs and form fields
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#C8181E', // Background color for the active tab
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: 'white', 
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#C8181E', // Background color for the button
    position: 'absolute',
    borderRadius: 5,
    padding: 15,
    width: '100%', // Adjust the width of the button
    bottom:20,
    left:18,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text inside the button
  },
});


export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1, // This allows the content to take up the available space
    justifyContent: 'center', // Center any content vertically if needed
    alignItems: 'center', // Center any content horizontally if needed
  },
  buttonContainer: {
    position: 'absolute', // Position the button container absolutely
    bottom: 20, // Distance from the bottom of the screen
    left: 0,
    right: 0,
    alignItems: 'center', // Center the button horizontally
  },
  loginButton: {
    backgroundColor: 'white', // Background color for the button
    borderRadius: 5,
    padding: 15,
    width: '50%', // Adjust the width of the button
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center', // Center the text inside the button
  },
});