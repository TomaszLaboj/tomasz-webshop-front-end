const fetchCategories = async () => {
    const response = await fetch("http://localhost:8080/categories-tree");
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Unexpected response status ${response.status}`);
    }
};

export {fetchCategories}
