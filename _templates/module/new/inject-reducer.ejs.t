---
to: src/redux/reducer.js
inject: true
after: "const reducers = {"
skip_if: "<%= name %>: <%= Name %>Reducer"
---
  <%= name %>: <%= Name %>Reducer,