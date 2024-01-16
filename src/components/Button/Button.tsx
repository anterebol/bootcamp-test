import { ButtonType } from "../../types/buttonType";

export const Button = (props: ButtonType) => {
  const { cls, children, callback } = props;
  return <button className={cls?.join(' ')} onClick={callback}>
    {children}
  </button>
}