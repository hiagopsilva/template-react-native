/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  condition: boolean;
  children: any;
};

const If = ({condition, children}: Props): any => (condition ? children : null);

export default If;
