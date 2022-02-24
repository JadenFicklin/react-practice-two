import React, { useState } from "react";

function HookCounterThree() {
  const [myName, setMyName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={myName.firstName}
          onChange={(e) => setMyName({ ...myName, firstName: e.target.value })}
        />
        <input
          type="text"
          value={myName.lastName}
          onChange={(e) => setMyName({ ...myName, lastName: e.target.value })}
        />
        <h2 className="first-name">{myName.firstName}</h2>
        <h2 className="last-name">{myName.lastName}</h2>
        <p className="p-tag">{JSON.stringify(myName)}</p>
      </form>
    </div>
  );
}

export default HookCounterThree;

// import React, { useState } from "react";

// function HookCounterThree() {
//   const [name, setName] = useState({ firstName: "", lastName: "" });

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={name.firstName}
//           onChange={(e) => setName({ ...name, firstName: e.target.value })}
//         />
//         <input
//           type="text"
//           value={name.lastName}
//           onChange={(e) => setName({ ...name, lastName: e.target.value })}
//         />

//         <h2>Your first name is - {name.firstName}</h2>
//         <h2>Your last name is - {name.lastName}</h2>
//         <h2>{JSON.stringify(name)}</h2>
//       </form>
//     </div>
//   );
// }

// export default HookCounterThree;
