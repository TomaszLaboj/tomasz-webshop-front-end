const fetchProducts = async () => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("categoryId");
    console.log(params.get("categoryId"));
    const url = new URL("http://localhost:8080/products")
    if (categoryId) {
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