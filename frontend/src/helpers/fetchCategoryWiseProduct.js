import SummaryApi from "../common"


const fetchCategoryWiseProduct = async (category) => {
    
    console.log("Category:", category);
console.log("API URL:", SummaryApi.categoryWiseProduct.url);

    const response = await fetch(SummaryApi.categoryWiseProduct.url, {
        method: SummaryApi.categoryWiseProduct.method,
        headers: {
            "Content-Type" :"application/json"
        },
        body: JSON.stringify({
            category : category
        })
    })

    console.log("Response status:", response.status);
    const dataResponse = await response.json();

    return dataResponse
}

export default fetchCategoryWiseProduct