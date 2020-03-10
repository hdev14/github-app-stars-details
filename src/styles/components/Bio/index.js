import styled from 'styled-components';

const Bio = styled.Text.attrs(props => ({
  numberOfLine: 2,
}))`
  margin-top: 5px;
  font-size: 14px;
  color: #999;
  line-height: 16px;
  text-align: center;
`;

export default Bio;
