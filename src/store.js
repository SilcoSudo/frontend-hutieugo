import { createStore } from 'redux';

// Reducer cơ bản (có thể mở rộng sau)
const initialState = {
    user: null, // Ví dụ: lưu thông tin user sau khi login
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

// Tạo store
const store = createStore(rootReducer);

export default store;