# Ticket store demo

## Technical stacks
* React
* Redux
* React hooks
* Redux hooks
* Styled component
* Styled system
* json-server

## Demo
* [30 seconds demo video for the ticket store](https://www.youtube.com/watch?v=PapBtVnass0&feature=youtu.be)

## Usages
```
git clone https://github.com/JenHsuan/ticket-store-demo.git
cd ticket-store
npm install
npm start
```

## Requirements
### 情境:

- 新建 npm 專案。
- 專案內容是發送票卷。
- 業務要求
  - 分為三個步驟，第一、第二步可以來回修改
  - 第三步是發送成功，三秒後，回到第一步。
  - 特殊處理
    - 當，第一步選擇店鋪 -> 選擇「全部」，
      「名稱」副標題要隱藏
    - 其餘店鋪，「名稱」副標題顯示
    - 名稱不可大於 25 個字，只能輸入中文和、英文、數字
    - 驗證不過，不可以到下一步
- 前端設計要求
  - 表單的欄位可能隨時增加，保留彈性
  - 預覽頁，每個區塊也會隨時增減，保留彈性
- 模擬情境
  - 後端還沒有 API，如何開始開發？
  - 不可以用任何 UI lib，非 UI npm 可以使用。
- 使用工具
  - Webpack, babel, React, Redux, styled-components
  - （建議）Formik, Yup

### 最終輸出

```
{
  shopId: int,
  name: string,
  color: string,
}
```