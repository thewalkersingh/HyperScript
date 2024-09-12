//complete the addBlog function to add moveup, movedown and delete button.
function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');


    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
    newBox.appendChild(newBlogPost);


    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

    // create a new div with className blog-buttons and append it to newBox
    const newBlogButton=document.createElement("div");
    newBlogButton.classList.add('blog-buttons');
    newBox.appendChild(newBlogButton);

    //Create move up button with class blog-button and move-up
    const moveUpButton=document.createElement("button");
    moveUpButton.classList.add("blog-button","move-up");
    moveUpButton.textContent="Move Up";
    newBlogButton.appendChild(moveUpButton);

    //Add event listener to move up button
    moveUpButton.addEventListener('click',()=>{
        const previousSibling=newBox.previousElementSibling;
        if (previousSibling){
            blogList.insertBefore(newBox,previousSibling);
        }
    });

    //Create moved down button with class blog-button and move-down
    const moveDownButton=document.createElement('button');
    moveDownButton.classList.add('blog-button','move-down');
    moveDownButton.textContent='Move Down';
    newBlogButton.appendChild(moveDownButton);

    //Add event listerner to movedown button
    moveDownButton.addEventListener('click',()=>{
        const nextSibling=newBox.nextElementSibling;
        if (nextSibling){
            blogList.insertBefore(nextSibling,newBox);
        }
    });

    //Create delete button with class blog-button and delete
    const deleteButton=document.createElement('button');
    deleteButton.classList.add('blog-button','delete');
    deleteButton.textContent='Delete';
    newBlogButton.appendChild(deleteButton);

    //Add event listener to delete button
    deleteButton.addEventListener('click',()=>{
        newBox.remove();
    });

    blogList.appendChild(newBox);

}

const blogData = [
    {
        title: 'First Blog Post',
        date: 'January 1, 2022',
        content: 'This is the content of the first blog post.'
    },
    {
        title: 'Second Blog Post',
        date: 'February 1, 2022',
        content: 'This is the content of the second blog post.'
    },
    {
        title: 'Third Blog Post',
        date: 'March 1, 2022',
        content: 'This is the content of the third blog post.'
    }
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array