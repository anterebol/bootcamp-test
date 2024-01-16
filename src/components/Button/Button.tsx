import { ButtonType } from '../../types/buttonType';
import { joinClasses } from '../../utils/joinClasses';

export const Button = (props: ButtonType) => {
  const { cls, children, callback } = props;
  return (
    <button type="button" className={joinClasses(cls || [])} onClick={callback}>
      {children}
    </button>
  );
};
