const submitButton = document.getElementById("reviewForm");

submitButton.addEventListener("submit", function (event) {
  event.preventDefault();

  const beenThere =
    document.querySelector('input[name="been-there"]:checked')
      ?.nextElementSibling.innerText || "No answer";
  const q1 =
    document.querySelector('input[name="q1"]:checked')?.value || "No answer";
  const q2 =
    document.querySelector('input[name="q2"]:checked')?.value || "No answer";
  const q5 =
    document.querySelector('input[name="q5"]:checked')?.value || "No answer";
  const reviewText =
    document.querySelector(".review-text").value || "No review";

  alert(
    `Thank you for your feedback!\n\nYour Responses:\n- Visited this place: ${beenThere}\n- Overall experience: ${q1}\n- Facilities: ${q2}\n- Recommendation: ${q5}\n- Review: ${reviewText} redirecting to home in 2 seconds`
  );

  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
});
