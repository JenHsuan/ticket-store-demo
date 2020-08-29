//Initial states
export const initialState = {
    currentPage: 0,
    shopId: 0,
    name: '',
    color: 'red',
    fee: 100,
    discount: 10
}

//Selector functions
export const selectPageState = (rootState) => rootState.ticketsReducer.currentPage;
export const selectShopIdState = (rootState) => rootState.ticketsReducer.shopId;
export const selectNameState = (rootState) => rootState.ticketsReducer.name;
export const selectColorState = (rootState) => rootState.ticketsReducer.color;
export const selectFeeState = (rootState) => rootState.ticketsReducer.fee;
export const selectDiscountState = (rootState) => rootState.ticketsReducer.discount;
