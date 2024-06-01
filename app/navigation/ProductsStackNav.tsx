import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products';


type ProductsStackParamList = {
  Products: undefined;
  ProductDetails: { id: number };
  //CartModal: undefined;
};

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStackNav = () => {
  return (
    <ProductsStack.Navigator
     screenOptions={{
        headerStyle: {
          backgroundColor: '#630202',
        },
        headerTintColor: '#fff',
      }}>
      <ProductsStack.Screen name="Products" component={Products} options={{ headerTitle: 'Shop App' }} />
    </ProductsStack.Navigator>
  );
};


export default ProductsStackNav;