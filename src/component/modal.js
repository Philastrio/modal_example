import React, { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const showToggle = () => {
    setModal(true);
  };
  const closeToggle = () => {
    setModal(false);
  };

  return (
    <div>
      {modal ? (
        <>
          <div className="modal" id="modal">
            <h2>Modal window</h2>
            <div className="content">
              Dolor irure tempor culpa tempor et tempor ea nostrud sint.Labore
              irure pariatur mollit enim quis incididunt id magna. Dolore
              adipisicing anim eu reprehenderit laboris nisi ut sit. Dolore ex
              excepteur pariatur mollit duis amet excepteur ex reprehenderit et.
              Fugiat officia ex aliqua excepteur. Proident ut aliquip consequat
              reprehenderit deserunt incididunt dolor ullamco ad dolor dolore
              culpa. Cupidatat occaecat est eu excepteur ipsum deserunt nulla
              esse dolor aliqua sint aute. Proident proident sint mollit
              pariatur amet voluptate tempor pariatur aliquip qui id cillum.
              Ipsum enim magna mollit consectetur eiusmod duis ea nisi tempor
              nostrud. Occaecat ut elit velit dolore reprehenderit do velit
              minim sit nisi. Laborum Lorem sunt qui deserunt sunt amet. Eiusmod
              cillum aliqua laboris anim pariatur sint pariatur qui. Eu aute
            </div>
            <div className="actions">
              <button onClick={closeToggle} className="toggle-button">
                close button
              </button>
            </div>
          </div>
        </>
      ) : (
        <button onClick={showToggle}>show button</button>
      )}
    </div>
  );
};

export default Modal;
