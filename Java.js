document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const currentPage = urlParams.get('page');

    const comicImage = document.getElementById("comic-image");
    const firstPageButton = document.getElementById("first_page");
    const backPageButton = document.getElementById("back_page");
    const forwardPageButton = document.getElementById("forward_page");
    const latestPageButton = document.getElementById("latest_page");

    const comicPages = [
        "ch1cover.png",
        "page1.png",
        "page2.png",
        "ch2cover.png"
        // Add more pages remember it needs to be the same filenames 
    ];
    
    const comicPagesData = [
        { number: "#1", date: "Uploaded: 10/17/23" },
        { number: "#2", date: "Uploaded: 10/24/23" },
        { number: "#3", date: "Uploaded: 10/29/23" },
        { number: "#4", date: "Uploaded: 11/13/23" }
        // Add number and time remember to update every time a new page is introduced
    ]; 
    
    function updateComicPage(pageIndex) {
        comicImage.src = `pages/${comicPages[pageIndex]}`;
        document.getElementById("number").textContent = comicPagesData[pageIndex].number;
        document.getElementById("date_of_release").textContent = comicPagesData[pageIndex].date;
    }

    if (currentPage) {
        const pageIndex = comicPages.findIndex(page => page === currentPage);
        if (pageIndex !== -1) {
            currentPageIndex = pageIndex;
            updateComicPage(currentPageIndex);
            console.log("Current Page:", currentPage);
        }
    }
    

    let currentPageIndex = 0;

    function goToFirstPage() {
        currentPageIndex = 0;
        updateComicPage(currentPageIndex);
    }

    function goBackPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateComicPage(currentPageIndex);
        }
    }

    function goForwardPage() {
        if (currentPageIndex < comicPages.length - 1) {
            currentPageIndex++;
            updateComicPage(currentPageIndex);
        }
    }

    function goToLatestPage() {
        currentPageIndex = comicPages.length - 1;
        updateComicPage(currentPageIndex);
    }

    // Add click event listeners to the page control buttons
    firstPageButton.addEventListener("click", goToFirstPage);
    backPageButton.addEventListener("click", goBackPage);
    forwardPageButton.addEventListener("click", goForwardPage);
    latestPageButton.addEventListener("click", goToLatestPage);

    //  display the first page
    updateComicPage(currentPageIndex);
});



//comment section
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");
    const commentsDiv = document.querySelector(".comments");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way.
  
      const name = nameInput.value;
      const email = emailInput.value;
      const comment = commentInput.value;
  
      if (name && comment) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `<strong>${name}</strong> (${email}): ${comment}`;
  
        // Append the comment to the comments container
        commentsDiv.appendChild(commentElement);
  
        // Clear the form inputs
        nameInput.value = "";
        commentInput.value = "";
      }
    });
  });
  

