import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const colorOptions = [
  'bg-yellow-300',
  'bg-pink-300',
  'bg-blue-300',
  'bg-green-300',
];

function Note({ id, content, color: initialColor, onRemoveNote }) {
  const [color, setColor] = useState(() => {
    if (initialColor) return initialColor;
    const randomIndex = Math.floor(Math.random() * colorOptions.length); // 0, 1, 2, 3 중 하나
    return colorOptions[randomIndex];
  });
  const [isEditing, setIsEditing] = useState(false);
  // const [content, setContent] = useState();
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={`p-4 ${color} relative max-h-[32rem] overflow-hidden`}
    >
      <div className="absolute top-2 right-2">
        {isEditing ? (
          <button
            onClick={e => {
              e.stopPropagation();
              setIsEditing(false);
            }}
            aria-label="Check Note"
            className="text-gray-700"
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            onClick={() => onRemoveNote(id)}
            aria-label="Close Note"
            className="text-gray-700"
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={e => setContent(e.target.value)}
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        style={{ height: 'auto', minHeight: '8rem' }}
        readOnly={!isEditing}
      />
      {isEditing && (
        <div className="flex space-x-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setColor(option)}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
              aria-label={`Change color to ${option}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Note;
