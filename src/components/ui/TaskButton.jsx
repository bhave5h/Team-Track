import React from 'react';
import styled from 'styled-components';

const TaskButton = ({ label, onClick, color, outlineColor, className, disabled }) => {
  return (
    <StyledWrapper $color={color} $outlineColor={outlineColor} className={className}>
      <button onClick={onClick} disabled={disabled}>
        <span className="button_top"> {label} </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  button {
    /* Variables */
    --button_radius: 0.6em;
    --button_color: ${props => props.$color || '#e8e8e8'};
    --button_outline_color: ${props => props.$outlineColor || '#000000'};
    font-size: 15px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: var(--button_radius);
    background: var(--button_outline_color);
    width: 100%;
    outline: none;
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.6em 1.2em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    width: 100%;
    text-align: center;
  }

  button:hover .button_top {
    /* Pull the button upwards when hovered */
    transform: translateY(-0.33em);
  }

  button:active .button_top {
    /* Push the button downwards when pressed */
    transform: translateY(0);
  }
  
  button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export default TaskButton;
