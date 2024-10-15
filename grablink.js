document.addEventListener("DOMContentLoaded", () => {
  const customLinkElement = document.getElementById("customlink");
  const emergencyButton = document.getElementById("emergencyButton");

  if (customLinkElement) {
    const redirectUrl = customLinkElement.href;

    emergencyButton.addEventListener("click", () => {
      window.location.href = redirectUrl;
    });
  } else {
    console.error("Element with ID 'customlink' not found.");
  }
});
