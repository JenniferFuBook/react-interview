import './index.css';

const DragAndDrop: React.FC = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('savedId', e.currentTarget.id); // Store the ID of the dragged element
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Allow dropping by preventing the default behavior
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const data = e.dataTransfer.getData('savedId'); // Retrieve the ID of the dragged element
    const draggableElement = document.getElementById(data);
    const dropzone = e.target as HTMLElement;
    dropzone.appendChild(draggableElement!); // Append the dragged element to the drop zone
  };

  return (
    <div>
      <h1>Drag and Drop API Demo</h1>
      {/* Draggable Element */}
      <div id="draggable" draggable="true" onDragStart={handleDragStart}>
        I am draggable.
      </div>

      {/* Drop Zone */}
      <div
        id="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drop Zone
      </div>
    </div>
  );
};

export default DragAndDrop;
