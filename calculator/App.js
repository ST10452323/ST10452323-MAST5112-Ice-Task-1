import { useState } from 'react'; 
import {
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	StyleSheet
} from 'react-native'; 


function App(){
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      if (!isNaN(n1)) {
          let res;
          switch (operator) {
              case '+':
                  res = n1 + n2;
                  break;
              case '-':
                  res = n1 - n2;
                  break;
              case '*':
                  res = n1 * n2;
                  break;
              case '/':
                  res = n2 !== 0 ? n1 / n2 : 'Error';
                  break;
              case '^':
                  res = Math.pow(n1, n2);
                  break;
              case '√':
                  res = Math.sqrt(n1);
                  break;
          }
          setResult(res);
      }
  };

	return(
		<View style={styles.container}> 
			<Text style={styles.heading}>Calculator</Text>
			<View style={styles.inputContainer}> 
				<TextInput 
					style={styles.input}
					placeholder="Enter number"
					value={num1}
					onChangeText={(text) => setNum1(text)}
					keyboardType="numeric"
				/> 
        
        		<TextInput 
					style={styles.input}
					placeholder="Enter number"
					value={num2}
					onChangeText={(text) => setNum2(text)}
					keyboardType="numeric"
				/> 
			</View>
      		<View style={styles.buttonContainer}>
        		<TouchableOpacity 
					style={styles.addButton}
					onPress={() => handleOperation('+')}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity> 
        		<TouchableOpacity 
					style={styles.addButton}
					onPress={() => handleOperation('-')}
				>
					<Text style={styles.addButtonText}>-</Text>
				</TouchableOpacity> 
        		<TouchableOpacity 
					style={styles.addButton}
					onPress={() => handleOperation('*')}
				>
					<Text style={styles.addButtonText}>*</Text>
				</TouchableOpacity> 
        		<TouchableOpacity 
					style={styles.addButton}
					onPress={() => handleOperation('/')}
				>
					<Text style={styles.addButtonText}>/</Text>
				</TouchableOpacity> 
        		<TouchableOpacity 
					style={styles.addButton}
					onPress={() => handleOperation('^')}
				>
					<Text style={styles.addButtonText}>^</Text>
				</TouchableOpacity> 
        		<TouchableOpacity 
					style={styles.addButton}
					onPress={() => handleOperation('√')}
				>
					<Text style={styles.addButtonText}>√</Text>
				</TouchableOpacity> 
      		</View>
			<View style={styles.tasksContainer}> 	
        		<Text>Answer: {result !== null ? result : ''}</Text>
			</View>
		</View>	
	);
}

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      padding: 20,    	
   },
   heading: {
      fontSize: 24, 
      marginBottom: 10, 
   },
   inputContainer: {
      alignItems: 'center', 
      marginBottom: 50,
      padding: 10,
   }, 
   input: {
      width: '100%',
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      paddingHorizontal: 10, 
      marginBottom: 10,
   },
   buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 20,
   },
   addButton: {
      width: 40, 
      height: 40, 
      backgroundColor: '#4CAF50',
      justifyContent: 'center', 
      alignItems: 'center', 
      marginHorizontal: 5,
      marginBottom: 5,
   },
   addButtonText: {
      fontSize: 24, 
      color: '#fff', 
   },
   tasksContainer: {
      marginTop: 20, 
   },
   task: {
      fontSize: 18, 
      marginBottom: 10, 
   },
});

export default App;
