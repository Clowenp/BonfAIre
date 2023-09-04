async function getNotes(){
    const res = await fetch('http://localhost:3000/api/notes');
    
}

export default async function HomePage(){
    return (
        <div>
            <h1>Home Page</h1>
            <p>Some content</p>
        </div>
    );
}