import { useState } from "react";
import { CardModal } from "components";
import "./Card.css";

const Card = ({ id, title, description, status, listId }) => {
  const [displayCardModal, setDisplayCardModal] = useState(false);

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
      <p className="card-title" onClick={() => setDisplayCardModal(true)}>
        {title}
      </p>
    </>
  );
};

export { Card };
