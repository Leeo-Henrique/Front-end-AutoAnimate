import { useState } from "react";
import API from "../../api";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { StyledLi } from "../technology/styles";
import { FormStyled, StyledUl } from "./styles";

import { Technologies } from "../technology";

export const ListTechnologies = ({ technologies, setTechnologies }) => {
  const [animationParent] = useAutoAnimate();
  const [input, setInput] = useState("");

  const addToList = async () => {
    const newItem = new Promise(async (resolve, reject) => {
      return await API.post("/api/technology/", { name: input })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
    setTechnologies([...technologies, await newItem]);
    return setInput("");
  };

  const changeComponent = async (id, typeOfChange) => {
    if (typeOfChange === "UP") {
      const findedTechnology = technologies.findIndex((tech) => tech.id === id);
      technologies[findedTechnology - 1].index += 1;

      await API.patch(
        `/api/technology/${technologies[findedTechnology - 1].id}/`,
        { index: technologies[findedTechnology - 1].index }
      );

      await API.patch(`/api/technology/${id}/`, {
        index: technologies[findedTechnology].index,
      });

      const newTechnologies = technologies.sort((a, b) => {
        return a.index - b.index;
      });
      return setTechnologies([...newTechnologies]);
    }

    const findedTechnology = technologies.findIndex((tech) => tech.id === id);
    technologies[findedTechnology + 1].index -= 1;

    await API.patch(
      `/api/technology/${technologies[findedTechnology + 1].id}/`,
      {
        index: technologies[findedTechnology + 1].index,
      }
    );

    await API.patch(`/api/technology/${id}/`, {
      index: technologies[findedTechnology].index,
    });

    const newTechnologies = technologies.sort((a, b) => {
      return a.index - b.index;
    });

    return setTechnologies([...newTechnologies]);
  };

  const sortList = () => {
    const newTechnologies = technologies.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    newTechnologies.forEach((tech, index) => {
      tech.index = index + 1;
      API.patch(`/api/technology/${tech.id}/`, { index: index + 1 });
    });

    return setTechnologies([...newTechnologies]);
  };

  const deleteComponent = async (id) => {
    await API.delete(`/api/technology/${id}/`);
    return API.get("/api/technology/").then((res) =>
      setTechnologies(res.data.sort((a, b) => a.index - b.index))
    );
  };

  return (
    <StyledUl ref={animationParent}>
      {technologies.map((technology, index) => (
        <Technologies
          technology={technology}
          key={index}
          changeComponent={changeComponent}
          deleteComponent={deleteComponent}
          list={technologies}
        />
      ))}
      <StyledLi>
        <FormStyled onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Add another..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={addToList}>Add</button>
          <button
            onClick={() => {
              sortList();
            }}
          >
            Sort
          </button>
        </FormStyled>
      </StyledLi>
    </StyledUl>
  );
};
