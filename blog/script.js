
const blogs = [
    {
        title: "Why Every Business Needs a Website in 2026",
        description: "In 2026, a professional website is no longer optional—it is essential for business growth. A well-designed website builds trust, improves brand credibility, attracts high-quality leads, and allows customers to discover your business anytime, anywhere. It works as your digital storefront 24/7.",
        image: "../logo.png",
        link: "/blog/posts/why-business-needs-website-in-2026.html"
    },
    {
        title: "How AI Chatbots Save Business Time",
        description: "AI chatbots help businesses automate customer support, answer common questions instantly, and engage visitors 24/7 without human intervention. They reduce repetitive manual work, improve response time, increase conversions, and allow teams to focus on high-value tasks while maintaining excellent customer experience at scale.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUerl8JZfSIy7trb6unVkPKIYQEVF2X_dkpw&s",
        link: "../soon.html"
    }
];



// =========== Grid Styling Logic ===========
const blogGrid = document.getElementById("blog-grid");

function renderBlogs(blogList) {
    blogGrid.innerHTML = "";

    if (blogList.length === 0) {
        blogGrid.innerHTML = "<h2>No blogs found</h2>";
        return;
    }

    blogList.forEach(blog => {
        blogGrid.innerHTML += `
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${blog.image}" alt="${blog.title}">
                </div>

                <div class="blog-content">
                    <h3>${blog.title}</h3>
                    <p>${blog.description}</p>
                    <a href="${blog.link}" class="read-btn">Read More →</a>
                </div>
            </div>
        `;
    });
}

renderBlogs(blogs);


// ==========Live Search===========

const searchInput = document.getElementById("blog-search");

searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchValue) ||
        blog.description.toLowerCase().includes(searchValue)
    );

    renderBlogs(filteredBlogs);
});

