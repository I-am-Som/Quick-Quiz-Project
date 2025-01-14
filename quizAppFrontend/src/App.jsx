import { useState } from 'react';
import Login from './components/Login.jsx';

const img = "https://www.pixground.com/wp-content/uploads/2023/02/Mountain-Lake-Reflection-in-Nature-Scenery-4K-Wallpaper.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Login />
    </div>
  );
}

export default App;
