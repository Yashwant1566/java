// let url="https://quote-garden.onrender.com/api/v3/quotes";
// async function getfact() {
//     try{
//         let res=await axios.get(url);
//         const quotes = res.data.data;
//         if (quotes.length > 0) {
//             // Log the first quote as an example
//             console.log(`Quote: ${quotes[0].quoteText} - Author: ${quotes[0].quoteAuthor}`);
//         } else {
//             console.log("No quotes found.");
//         }
//         console.log(res.data.data);
//     }catch(e){
//         console.log(e);
//     }
// }
let url = "http://localhost:3000/quotes"; // Update based on your proxy setup

async function getFact() {
    try {
        let res = await axios.get(url);
        console.log(res.data); // Log the entire response

        const quotes = res.data.data; // Check this line
        if (quotes && quotes.length > 0) {
            console.log(`Quote: ${quotes[0].quoteText} - Author: ${quotes[0].quoteAuthor}`);
        } else {
            console.log("No quotes found.");
        }
    } catch (e) {
        console.log(e);
    }
}

getFact();


// let url="https://catfact.ninja/fact";


//  async function getfact() {
//         try{
//             let res= await axios.get(url);
//             console.log(res.data);
//         }
//         catch(err){
//             console.log(err);
//         }
// }
// getfact();
