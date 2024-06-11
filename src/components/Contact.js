import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact</h1>
      <form>
        <input
          className="border-black p-2 m-2"
          type="text"
          placeholder="name"
        />
        <input className="border-black p-2 m-2" type="text" placeholder="age" />
        <button className="border-black p-2 m-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
