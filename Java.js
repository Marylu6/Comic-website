
document.addEventListener("DOMContentLoaded", function () {
    const comicImage = document.getElementById("comic-image");
    const firstPageButton = document.getElementById("first_page");
    const backPageButton = document.getElementById("back_page");
    const forwardPageButton = document.getElementById("forward_page");
    const latestPageButton = document.getElementById("latest_page");

    const comicPages = [
        "page1.png",
        "page2.png",
        "page3.png"
        // Add more page filenames as needed
    ];

    const comicPagesData = [
        { number: "#1", date: "Uploaded: 10/17/23" },
        { number: "#2", date: "Uploaded: 10/24/23" },
        { number: "#3", date: "Uploaded: 10/29/23" }
        // Add more page data as needed
    ];

    let currentPageIndex = 0;

    function updateComicPage() {
        comicImage.src = `pages/${comicPages[currentPageIndex]}`;
        document.getElementById("number").textContent = comicPagesData[currentPageIndex].number;
        document.getElementById("date_of_release").textContent = comicPagesData[currentPageIndex].date;
    }

    function goToFirstPage() {
        currentPageIndex = 0;
        updateComicPage();
    }

    function goBackPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateComicPage();
        }
    }

    function goForwardPage() {
        if (currentPageIndex < comicPages.length - 1) {
            currentPageIndex++;
            updateComicPage();
        }
    }

    function goToLatestPage() {
        currentPageIndex = comicPages.length - 1;
        updateComicPage();
    }

    // Add click event listeners to the page control buttons
    firstPageButton.addEventListener("click", goToFirstPage);
    backPageButton.addEventListener("click", goBackPage);
    forwardPageButton.addEventListener("click", goForwardPage);
    latestPageButton.addEventListener("click", goToLatestPage);

    //  display the first page
    updateComicPage();
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
  

