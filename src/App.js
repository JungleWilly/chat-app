import React from "react";
import { Contact } from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Contact
                name="Micheal Chavez"
                avatarUrl="https://randomuser.me/api/portraits/men/45.jpg"
                online={true}
            />
            <Contact
                name="Rosa Cook"
                avatarUrl="https://randomuser.me/api/portraits/women/80.jpg"
                online={false}
            />
            <Contact
                name="Ella Green"
                avatarUrl="https://randomuser.me/api/portraits/women/45.jpg"
                online={true}
            />
        </div>
    );
}

export default App;
