---
to: src/redux/reducer.js
inject: true
after: "import .* combineReducers"
skip_if: "import <%= Name %>Reducer"
---
import <%= Name %>Reducer from '../modules/<%= name %>/<%= Name %>State';