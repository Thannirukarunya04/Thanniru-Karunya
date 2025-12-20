function showHome() {
    document.getElementById("content").innerHTML = `
        <h2>Home</h2>
        <img src="images/Home.png" class="section-img">
        <p>Welcome to our website. This is the home section.</p>
    `;
}

function showAbout() {
    document.getElementById("content").innerHTML = `
        <h2>About</h2>
        <img src="images/About.png" class="section-img">
        <p>We are a team learning web development using HTML, CSS, and JavaScript.</p>
    `;
}

function showServices() {
    document.getElementById("content").innerHTML = `
        <h2>Services</h2>
        <img src="images/Services.png" class="section-img">
        <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>SEO Optimization</li>
        </ul>
    `;
}

function showContact() {
    document.getElementById("content").innerHTML = `
        <h2>Contact Us</h2>
        <img src="images/Contact.png" class="section-img">
        <p>Email: example@gmail.com</p>
        <p>Phone: 2578412852</p>
    `;
}
