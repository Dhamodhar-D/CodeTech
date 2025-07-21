import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

const App = () => {
  const navigate = useNavigate();

  const createDoc = () => {
    const id = uuidV4();
    navigate(`/documents/${id}`);
  };

  return (
    <div className="home-container">
      <h1>Welcome to Collaborative Editor</h1>
      <button onClick={createDoc}>Create New Document</button>
    </div>
  );
};

export default App;
