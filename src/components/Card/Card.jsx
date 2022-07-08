import { useState, useEffect } from "react";
import { useData } from "context";
import { CardModal } from "components";
import "./Card.css";

const Card = ({ id, title, description, status, listId }) => {
  const { state } = useData();
  const [displayCardModal, setDisplayCardModal] = useState(false);

  useEffect(() => {
    setDisplayCardModal(false);
  }, [state]);

  return (
    <>
      {displayCardModal ? (
        <CardModal
          setDisplayCardModal={setDisplayCardModal}
          id={id}
          title={title}
          description={description}
          status={status}
          listId={listId}
        />
      ) : null}
      <p
        className={`card-title ${
          title === "Untitled" ? "card-title-invalid" : ""
        }`}
        onClick={() => setDisplayCardModal(true)}
      >
        {title}
      </p>
    </>
  );
};

export { Card };
