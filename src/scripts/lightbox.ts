window.addEventListener("load", () => {
  const images = document.querySelectorAll(".markdown p img");
  images.forEach((image) => {
    image.parentElement.innerHTML = `
    <p> 
        <a data-type="image" href="${image.src}" data-fslightbox>
            <img src="${image.src}" alt="${image.alt}" />
        </a>
    </p>
    `;
  });

  refreshFsLightbox();
});
