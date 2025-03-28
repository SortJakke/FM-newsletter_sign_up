const form = document.getElementById("form")
const errorMessage = document.getElementById("email-error")

const main = document.getElementById("main")
const modal = document.getElementById("modal")
const dismiss = document.getElementById("dismiss")

const handleSubmit = (e) => {
  e.preventDefault(e)

  const formDataEntries = new FormData(e.target).entries()
  const email = Object.fromEntries(formDataEntries)

  const emailErrorMessage = validateEmail(email)

  if (emailErrorMessage) {
    form.classList.add("form-error")
    errorMessage.innerText = emailErrorMessage
  } else {
    form.classList.remove("form-error")
    errorMessage.innerText = emailErrorMessage

    main.style.display = "none"
    modal.style.display = "flex"
  }
}

function validateEmail(emailObj) {
  let email = emailObj.email.toString()

  if (!email) return "Email is required"

  const isValidEmail = /^\S+@\S+$/g
  if (!isValidEmail.test(email)) {
    return "Please enter a valid email"
  }

  return ""
}

form.addEventListener("submit", handleSubmit)
dismiss.addEventListener("click", () => {
  main.style.display = "grid"
  modal.style.display = ""
})
