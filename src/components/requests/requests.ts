const fetchProducts = async (categoryId: string) => {

    const url = new URL(`http://localhost:8080/products`)
    if (categoryId !== '0') {
        url.searchParams.set("categoryId", categoryId);
    }
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Unexpected response status ${response.status}`);
    }
}

export {fetchProducts};