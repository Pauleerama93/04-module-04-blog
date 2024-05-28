const mainElement = document.querySelector('main');

const handleEmpty = function () {
    const element = document.createElement("h2");
    element.textContent = "No blogs have been created yet";
    mainElement.appendChild(element);
}

const renderBlogList = function () {
    const blogs = readBlogDataFromLocalStorage();

    if(blogs.length === 0) {
        handleEmpty();
        return;
    }

    for(let index = 0; index < blogs.length; index++){
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const blockquote = document.createElement("blockquote");
        const p = document.createElement("p");

        h2.textContent = blogs[index].title;
        article.appendChild(h2);
        
        p.textContent = `By: ${blogs[index].username}`;
        article.appendChild(p);

        blockquote.textContent = blogs[index].content;
        article.appendChild(blockquote);


        article.classList.add("card");

        mainElement.append(article);

    }
}
renderBlogList();