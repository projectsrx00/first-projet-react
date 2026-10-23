
import { useState, useContext, createContext } from "react";

const UserContext = createContext();

function TestUseContxt() {
    const [user, setUser] = useState({
        name: "John",
        age: 30
    });

    return (
        <div>
            <UserContext.Provider value={{ user }}>
                <h1>User name is {user.name}</h1>

                <input
                    type="text"
                    value={user.name}
                    onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                    }
                />

                <Component2 />
            </UserContext.Provider>
        </div>
    );
}

function Component2() {
    return (
        <div>
            <h1>Component 2</h1>
            <Component3 />
        </div>
    );
}

function Component3() {
    return (
        <div>
            <h1>Component 3</h1>
            <Component4 />
        </div>
    );
}

function Component4() {
    return (
        <div>
            <h1>Component 4</h1>
            <Component5 />
        </div>
    );
}

function Component5() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Component 5</h1>
            <h2>User name is {user.name}</h2>
        </div>
    );
}

export default TestUseContxt;
