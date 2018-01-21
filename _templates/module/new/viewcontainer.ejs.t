---
to: src/modules/<%= name %>/<%= Name %>ViewContainer.js
---
import { connect } from 'react-redux';
import <%= Name %>View from './<%= Name %>View';

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(<%= Name %>View);