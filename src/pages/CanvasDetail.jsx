import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { getCanvasById, updateTitle } from '../api/canvas';

function CanvasDetail() {
  const { id } = useParams();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvasById(id);
      setCanvas(data);
    };
    fetchCanvas();
  }, [id]);

  const handleTitleChange = async title => {
    try {
      await updateTitle(id, title);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      {JSON.stringify(canvas)}
      <CanvasTitle value={canvas?.title} onChange={handleTitleChange} />
      <LeanCanvas />
    </div>
  );
}

export default CanvasDetail;
