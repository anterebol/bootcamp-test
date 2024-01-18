import { ButtonType } from '../../types/buttonType';
import { joinClasses } from '../../utils/joinClasses';

export const Button = (props: ButtonType) => {
  const { cls, children, callback, text, isDisable } = props;
  return (
    <button
      type="button"
      className={joinClasses(['button', ...(cls || [])])}
      onClick={callback}
      disabled={isDisable || false}
    >
      {text}
      {children}
    </button>
  );
};
