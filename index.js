console.log('\n')

{
    const nums = [1, 2, "salam", 3];
    const result = nums.map(n => (
        n * n)
    )
    console.log(result)
    console.log('\n-----------------------\n')
}

{
    const array = [ // array of objects
        { name: "Ziad", age: 20 },
        { name: "Sara", age: 22 }
    ];

    const names = array.map(u => u.name.toUpperCase()); // takes an object from the array & returns the name from the object
    console.log(names)
    console.log('\n-----------------------\n')
}

{
    const products = [
        { id: 1, name: "iPhone", price: 999 },
        { id: 2, name: "AirPods", price: 199 },
        { id: 3, name: "MacBook", price: 1299 }
    ];

    /* practical React example of using .map() to render UI
    export default function App() {
        return (
                <div>
                <h1>Products</h1>

                {products.map(p => ( // -----------> this will cause the .map() to do this for each element inside the products
                    <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                    <h2>{p.name}</h2>
                    <p>Price: ${p.price}</p>
                    </div>
                ))}
                </div>
            );
        }
    */
}

{
    const people = [{ name: "Ziad" }, { name: "John" }]; // Converting data structure format → another format

    const greetings = people.map(p => `Hello <p>${p.name}<p>`); // Example: object → jsx
    console.log(greetings);
    console.log('\n-----------------------\n')
}
