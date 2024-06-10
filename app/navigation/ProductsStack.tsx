import {  NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';


type ProductsStackParamList = {
  Products: undefined;
  ProductDetails: { id: number };
  //CartModal: undefined;
};

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();
export type ProductsPageProps = NativeStackScreenProps<ProductsStackParamList,'Products'>;
export type ProductDetailsPageProps = NativeStackScreenProps<ProductsStackParamList,'ProductDetails'>;



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
      <ProductsStack.Screen name="ProductDetails" component={ProductDetails} options={{ headerTitle: '' }} />
    </ProductsStack.Navigator>
  );
};


export default ProductsStackNav;