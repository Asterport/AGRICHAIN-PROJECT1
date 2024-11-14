{/* <script>
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () = {
        navbar.classList.toggle('active')
    });
</script> */}
// Get the buttons and content area
document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById('homeLink');
    const content = document.getElementById('content');
  
    // Function to load "Home" content
    function loadHomeContent() {
      content.innerHTML = `
        <section>
          <h2>Welcome to AgriChain</h2>
          <p>AgriChain is your one-stop solution for managing agricultural supply chains efficiently. 
          We connect farmers to markets, improve logistics, and ensure product traceability from the farm to your table.</p>
        </section>
      `;
    }
  
    // Add click event listener for "Home" link
    homeLink.addEventListener('click', loadHomeContent);
  
    // Optional: Load home content by default
    loadHomeContent();
  });
  