import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

interface ButtonState {
  disabled: boolean;
}

const ButtonStyle = styled.button`
  background: red;
`;

class Button extends React.Component<ButtonProps, ButtonState> {
  static defaultProps: Partial<ButtonProps> = {
    disabled: false,
  };

  constructor(props: ButtonProps) {
    super(props);

    this.state = {
      disabled: props.disabled || false,
    };
  }

  private handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const { onClick, disabled } = this.props;

    if (typeof onClick !== 'undefined' && !disabled) {
      onClick(event);
    }
  }

  render() {
    const { disabled, children } = this.props;

    return (
      <ButtonStyle onClick={this.handleClick} disabled={disabled}>
        {children}
      </ButtonStyle>
    );
  }
}

export default Button;
