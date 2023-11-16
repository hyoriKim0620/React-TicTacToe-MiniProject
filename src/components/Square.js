import React from "react";
import "./Square.css";

const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

// 위와 같은 결과 / 다른 방식
// const Square = (props) => {
//   return (
//     <button
//       className="square"
//       onClick={() => {
//         props.onClick();
//       }}
//     >
//       {props.value}
//     </button>
//   );
// };

export default Square;
