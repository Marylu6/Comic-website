document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = urlParams.get('page');

    const comicPages = [
        "ch 1 cover.png",
        "page1.png",
        "page2.png",
        "ch 2 cover.png"
        // Add more pages, remember it needs to be the same filenames 
    ];

    const comicPagesData = [
        { number: "#1", date: "Uploaded: 10/17/23" },
        { number: "#2", date: "Uploaded: 10/24/23" },
        { number: "#3", date: "Uploaded: 10/29/23" },
        { number: "#4", date: "Uploaded: 11/13/23" }
        // Add number and time, remember to update every time a new page is introduced
    ];

    function updateComicPage(currentPageIndex) {
        const comicImage = document.getElementById("comic-image");
        const numberElement = document.getElementById("number");
        const dateElement = document.getElementById("date_of_release");
    
        comicImage.src = `pages/${comicPages[currentPageIndex]}`;
        numberElement.textContent = comicPagesData[currentPageIndex].number;
        dateElement.textContent = comicPagesData[currentPageIndex].date;
    }
    
    if (currentPage) {
        switch (currentPage) {
            case 'ch1':
                // Load or display content for Chapter 1
                updateComicPage(0); // Assuming 'ch 1 cover.png' is the first page in your array
                break;
            case 'ch2':
                // Load or display content for Chapter 2
                updateComicPage(1); // Assuming 'page1.png' is the second page in your array
                break;
            // Add more cases for additional chapters/pages
        }
    }
    
    console.log(comicPages); // Check the array of comic pages
    console.log(comicPages[3]); // Check if the correct page is being referenced
    const chapter2Element = document.getElementById("chapter2");
    console.log(chapter2Element); // Check if the element is found
});
