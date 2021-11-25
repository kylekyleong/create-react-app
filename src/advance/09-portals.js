import React, { useState } from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "50px",
  zIndex: 10000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 10000,
};

function Modal({ onClose, ...props }) {
  // ReactDom.createPortal: Create a portal to render outside its parent component
  // Keep parent-child relation, but render content somewhere else
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        {props.children}
        <button onClick={() => onClose()}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && <Modal onClose={() => setIsOpen(false)}>Modal opened</Modal>}
      </div>
      <div style={{ position: "relative", zIndex: 2, backgroundColor: "red" }}>
        Content
      </div>
      <div id="portal"></div>
    </>
  );
}
