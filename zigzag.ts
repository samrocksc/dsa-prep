export type TOptions = Readonly<{
  left: string[];
  values: string[][];
  down: boolean;
  row: number;
  col: number;
}>;

export const zigzag = (
  s: string,
  numRows: number,
  options?: TOptions,
): string => {
  const { row = 0, col = 0, left, values, down } = options ?? {};
  const rows = (numRows && numRows - 1) || 0;
  // handle default case
  if (!numRows || numRows === 1) return s;
  // split the string into an array
  // handle harness if numRows is defined and there are  no recursive values yet, create an array of an arrays
  if (!values) {
    const initialLeft = s.split("");
    return zigzag(s, numRows, {
      left: initialLeft,
      values: [...Array(numRows)].map(() => []),
      down: true,
      row,
      col,
    });
  }

  if (left) {
    const [char, ...restLeft] = left;
    console.log(
      `placing value ${values[row][col]} ${char} at row ${row} and col ${col}, the down is ${down}`,
    );
    values[row][col] = char;
    return zigzag(s, numRows, {
      left: restLeft,
      values,
      down: row === rows,
      row: down ? row + 1 : row - 1,
      col: col + 1,
    });
  }

  return values.flat().join("");
};
