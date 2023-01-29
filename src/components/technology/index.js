import { TiArrowSortedUp } from "react-icons/ti";
import { MdClose } from "react-icons/md";

import { StyledLi } from "./styles";

export const Technologies = ({
  technology,
  deleteComponent,
  changeComponent,
  list,
}) => {
  return (
    <StyledLi>
      <span>{technology.name}</span>
      <div>
        <button
          style={
            technology.index > 1
              ? { cursor: "pointer" }
              : { pointerEvent: "none", opacity: ".1" }
          }
          onClick={() => {
            if (technology.index > 1) {
              technology.index -= 1;
              changeComponent(technology.id, "UP");
            }
          }}
        >
          <TiArrowSortedUp size={25} />
        </button>
        <button
          style={
            list.length !== technology.index
              ? { cursor: "pointer" }
              : { pointerEvent: "none", opacity: ".1" }
          }
          onClick={() => {
            if (list.length !== technology.index) {
              technology.index += 1;
              changeComponent(technology.id, "");
            }
          }}
        >
          <TiArrowSortedUp size={25} style={{ transform: "rotate(180deg)" }} />
        </button>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteComponent(technology.id);
          }}
        >
          <MdClose className="close__buton" />
        </button>
      </div>
    </StyledLi>
  );
};
