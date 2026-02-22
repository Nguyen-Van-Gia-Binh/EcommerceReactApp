# 🛒 E-Commerce Application

Ứng dụng thương mại điện tử đơn giản được xây dựng bằng **React** và **Redux Toolkit**, cho phép người dùng duyệt sản phẩm, thêm vào giỏ hàng, điều chỉnh số lượng và quản lý giỏ hàng.

> **Bài thực hành** – Môn Web201c, Đại học FPT (Spring 2026)

---

## ✨ Tính năng

- 📦 Hiển thị danh sách sản phẩm
- ➕ Thêm sản phẩm vào giỏ hàng
- 🔢 Tăng / Giảm số lượng sản phẩm trong giỏ
- ❌ Xóa từng sản phẩm khỏi giỏ hàng
- 🗑️ Xóa toàn bộ giỏ hàng
- 💰 Tính tổng giá trị đơn hàng tự động
- 🔄 Nút "Add to Cart" tự động chuyển thành "Added" khi sản phẩm đã có trong giỏ

---

## 🛠️ Công nghệ sử dụng

| Công nghệ | Phiên bản | Mục đích |
|---|---|---|
| [React](https://react.dev/) | 18.2 | Xây dựng giao diện |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2.2 | Quản lý state toàn cục |
| [React-Redux](https://react-redux.js.org/) | 9.1 | Kết nối React với Redux |
| [Vite](https://vitejs.dev/) | 5.2 | Build tool & Dev server |
| ESLint | 8.57 | Kiểm tra chất lượng code |

---

## 📁 Cấu trúc dự án

```
ecommerce_rtk/
├── index.html                  # Entry point HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                # Điểm vào ứng dụng, cấu hình Provider
    ├── App.jsx                 # Component gốc, layout chính
    ├── App.css                 # CSS cho App
    ├── index.css               # CSS toàn cục
    ├── store.js                # Cấu hình Redux Store
    └── Components/
        ├── CartSlice.jsx       # Redux Slice – quản lý state giỏ hàng
        ├── ProductList.jsx     # Component hiển thị danh sách sản phẩm
        ├── ProductList.css     # CSS cho ProductList
        ├── ShoppingCart.jsx    # Component hiển thị giỏ hàng
        └── ShoppingCart.css    # CSS cho ShoppingCart
```

---

## 🚀 Cài đặt & Chạy

### Yêu cầu

- [Node.js](https://nodejs.org/) phiên bản 16 trở lên
- npm hoặc yarn

### Các bước thực hiện

```bash
# 1. Clone repository
git clone https://github.com/ibm-developer-skills-network/ecommerce_rtk.git
cd ecommerce_rtk

# 2. Cài đặt dependencies
npm install

# 3. Chạy ứng dụng ở chế độ development
npm run dev

# 4. Mở trình duyệt tại địa chỉ hiển thị (mặc định: http://localhost:5173)
```

### Các lệnh khác

```bash
# Build production
npm run build

# Preview bản build
npm run preview

# Kiểm tra lint
npm run lint
```

---

## 🏗️ Kiến trúc Redux

```
┌─────────────────────────────────────────────────┐
│                   Redux Store                   │
│  ┌───────────────────────────────────────────┐  │
│  │              cart (CartSlice)              │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │  cartItems: [                       │  │  │
│  │  │    { id, name, price, quantity }     │  │  │
│  │  │  ]                                  │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  │                                           │  │
│  │  Actions:                                 │  │
│  │  • addItemToCart(product)                 │  │
│  │  • removeItemFromCart(id)                 │  │
│  │  • increaseItemQuantity(id)              │  │
│  │  • decreaseItemQuantity(id)              │  │
│  │  • clearCart()                            │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
         │                          │
         ▼                          ▼
  ┌──────────────┐         ┌────────────────┐
  │  ProductList │         │  ShoppingCart   │
  │  (dispatch)  │         │  (useSelector) │
  └──────────────┘         └────────────────┘
```

---

## 📝 Ghi chú

- Dữ liệu sản phẩm hiện tại được khai báo trực tiếp trong `ProductList.jsx` (hard-coded).
- Ứng dụng chưa có tính năng persist state (state sẽ mất khi reload trang).
- Đây là bài thực hành để luyện tập **Redux Toolkit** với các khái niệm: `createSlice`, `configureStore`, `useDispatch`, `useSelector`.

---

## 📄 License

Dự án sử dụng giấy phép [Apache 2.0](./LICENSE).