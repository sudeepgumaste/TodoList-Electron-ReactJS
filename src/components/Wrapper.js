import styled from 'styled-components';

import colors from '../styleVariables/colors'
import measures from '../styleVariables/measures';

const Wrapper = styled.div`
  width: 100vw;
  /* padding-top: 3rem; */
  height: calc(100vh - ${measures.titleBarHeight});
  margin-top: ${measures.titleBarHeight};
  overflow: hidden;
  display : flex;
  background: ${colors.categoryBackgroundLight};
`
export default Wrapper;