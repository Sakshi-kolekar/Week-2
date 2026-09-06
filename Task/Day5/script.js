
// Simulate a delayed API call using Promise

const fakeApiCall = (success) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("API request failed!");
            }

        }, 2000);
    });
};


// Call API using async/await

const getData = async () => {

    try {

        console.log("Loading...");

        const data = await fakeApiCall(true);

        console.log(data);

    } catch (error) {

        console.log("Error:", error);

    }
};


// Run function

getData();
