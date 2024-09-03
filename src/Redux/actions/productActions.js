import {
  FETCH_BESTSELLERS_PRODUCTS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
} from "../actionTypes";
import {
  fetchProducts,
  fetchProductByID,
  fetchBestSellers,
} from "../api/productsAPI";

export const fetchProductsAction = () => async (dispatch, getState) => {
  const { loaded } = getState().products;

  // Only fetch products if they haven't been loaded yet
  if (!loaded) {
    try {
      const products = await fetchProducts();
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    } catch (error) {
      console.log("Error Fetching Products", error);
    }
  }
};

export const fetchProductByIDAction = (productId) => async (dispatch) => {
  try {
    const product = await fetchProductByID(productId);
    dispatch({
      type: FETCH_PRODUCT_BY_ID,
      payload: product,
    });
  } catch (error) {
    console.log("Error Fetching Product", error);
  }
};

export const fetchBestSellersAction = () => async (dispatch) => {
  try {
    const bestsellers = await fetchBestSellers();
    dispatch({
      type: FETCH_BESTSELLERS_PRODUCTS,
      payload: bestsellers,
    });
  } catch (error) {
    console.log("Error Fetching BestSellers Products", error);
  }
};
