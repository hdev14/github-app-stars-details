import styled from 'styled-components';

const Avatar = styled.Image`
  height: ${props => (props.size.height ? props.size.height : '64px')};
  width: ${props => (props.size.height ? props.size.height : '64px')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '42px')};
  background-color: #ddd;
`;

export default Avatar;
