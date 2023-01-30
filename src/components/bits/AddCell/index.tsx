import cn from 'classnames';
import { FC, ReactNode } from 'react';
import './style.scss';

export interface IAddCellProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  v1?: boolean;
  v2?: boolean;
  v3?: boolean;
  v4?: boolean;
  placeholder?: string;
  submitTitle?: string;
  submitIcon?: ReactNode;
}

export const AddCell: FC<IAddCellProps> = ({
  v1,
  v2,
  v3,
  v4,
  placeholder,
  submitTitle,
  submitIcon,
  ...props
}) => (
  <form
    className={cn(
      'c_addCell',
      v1 && 'c_addCell__v1',
      v2 && 'c_addCell__v2',
      v3 && 'c_addCell__v3',
      v4 && 'c_addCell__v4'
    )}
  >
    <input
      className="c_addCell__type"
      type="tel"
      placeholder={placeholder}
      required
      {...props}
    />
    <button className="c_addCell__submit" type="submit">
      {submitTitle}
      {submitIcon}
    </button>
  </form>
);

export default AddCell;
