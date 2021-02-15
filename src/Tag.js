import styled from 'styled-components';
import { variant, system } from 'styled-system';
import Box from './Box';

const Tag = styled(Box)`
  text-decoration: none;
  transition: box-shadow ${(props) => props.transitionEase},
    transform ${(props) => props.transitionEase},
    border ${(props) => props.transitionEase},
    background ${(props) => props.transitionEase},
    color ${(props) => props.transitionEase};

  ${variant({
    variants: {
      solid: {
        color: 'primary',
        backgroundColor: 'white',
        boxShadow: 2,
        ':hover, :active': {
          color: 'white',
          backgroundColor: 'primary',
          boxShadow: 3
        }
      },
      outline: {
        color: 'primary',
        backgroundColor: 'transparent',
        border: 1,
        borderColor: 'primary',
        ':hover, :active': {
          textDecoration: 'underline'
        }
      }
    },
    prop: 'tagType'
  })}

  ${system({
    tagColor: {
      properties: ['color', 'borderColor'],
      scale: 'colors'
    }
  })}
`;

Tag.propTypes = Box.propTypes;

Tag.defaultProps = {
  tagType: 'solid',
  transitionEase: '325ms ease',
  margin: 1,
  px: '1rem',
  py: '0.4rem',
  fontWeight: 'bold',
  borderRadius: 2
};

export default Tag;
