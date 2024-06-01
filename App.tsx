import { NavigationContainer } from '@react-navigation/native';
import ProductsStackNav from './app/navigation/ProductsStackNav';

export default function App() {
  return (
    <NavigationContainer>
      <ProductsStackNav />
    </NavigationContainer>
  );
}