import {useState} from "react";
const User= ({name})=>{
    const [Count, setCount] = useState(0);
    return <div className="user-card">
         <button
          onClick={() => {
            setCount(Count + 1);
          }} 
        >
          Click me!:{Count}
        </button>
    <h1>Hello</h1>
    <h2>Name: {name}</h2>
    </div>
} 
export default User;