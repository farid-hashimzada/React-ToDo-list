
const colors = [
    'black', 'green', 'purple', 'orange', 'red', 'teal', 'black', 'orange', 'gary', 'gold'
]

export function TodoCard({ item, onDelete, onEdit }) {
    return (
        <div key={item.id} className="toDo" style={{ background: colors[item.colorsIndex] }}>
            <button onClick={onDelete}>✖</button>
            <button onClick={onEdit}>🖋</button>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </div>
    )
}

export default TodoCard