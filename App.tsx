import { NavigationContainer } from '@react-navigation/native';
import ProductsStack from './app/navigation/ProductsStack';

export default function App() {
  return (
    <NavigationContainer>
      <ProductsStack />
    </NavigationContainer>
  );
}