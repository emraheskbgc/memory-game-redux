import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { initializeGame } from "../redux/memorySlice";

function Board() {
  const items = useSelector((state) => state.items);
  const score = useSelector((state) => state.score);
  const matched = useSelector((state) => state.matched);
  const dispatch = useDispatch();
  console.log(matched.length);
  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className="text-center mt-4 text-white fw-bold">
          Memory Game With Cards
          <a href="https://github.com/emraheskbgc" target="_blank" rel="noreferrer"> 
            <img
              className="img img-fluid ms-3 mb-1 icon"
              src="./github.png"
              alt="github logo"
              width={32}
            />
          </a>
          <a href="https://www.linkedin.com/in/emraheskiba%C4%9Fc%C4%B1/" rel="noreferrer" target="_blank">
          <img
            className="img img-fluid ms-3 mb-1 icon"
            src="./linkedin.png"
            alt="linkedin logo"
            width={32}
          />
        </a>
        </h1>
        <h5 className="text-center mt-4 text-white fw-bold">Score: {score}</h5>
        <button
        className="menuBtn text-center my-1 mx-3  bg-danger-subtle"
        onClick={() => dispatch(initializeGame())}
      >
        Reset 
      </button>
        {matched.length === 8 && (
          <button
            className="menuBtn text-center my-1"
            onClick={() => dispatch(initializeGame())}
          >
            New Game
          </button>
        )}

        <div
          className="row mt-3 mx-auto"
          style={{ maxWidth: "600px", maxHeight: "0px" }}
        >
          {items.map((item, id) => (
            <div
              key={id}
              className="col-3 mb-3 text-center d-flex justify-content-around"
            >
              <Card image={item.path} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Board;
