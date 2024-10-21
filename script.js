// counter for form creation...
let formId = 0

// check agar form exists kare che ke nai!
let formExists = false

// when form will be deleted, this flag will set to true!
let formWasDeleted = false

// References to different pages
const homepage = document.getElementById('homepage')
const formCreationPage = document.getElementById('formCreationPage')
const formList = document.getElementById('formList')
const createFormButton = document.getElementById('createForm')
const formDeleteMessage = document.getElementById('formDeleteMessage')

// Handle form creation
createFormButton.addEventListener('click', () => {
    formId++
    formExists = true

    // hide homepage
    homepage.classList.add('hidden')

    // show formCreation Page
    formCreationPage.classList.remove('hidden')
    location.hash = 'form-created'     // hash for url-routing (without server)

    // now let's add the created form, to homepage...
    const formItem = document.createElement('div')
    // initiallizing element class and id
    formItem.className = 'form-item'
    formItem.id = `form-${formId}`

    // creating a delete button and mention the name of the form previously created!
    formItem.innerHTML = 
    `<text style="padding:10px">Your Form ${formId}</text> <button class="delete-btn" style="font-size:30px" onclick="deleteForm(${formId})">Delete</button>`
    // console.log("formItem.innerHTML: ",  formItem.innerHTML)

    
    formList.appendChild(formItem)
});

// homepage handling...
function goBackHome() {
    // hide formCreationPage now, first!
    formCreationPage.classList.add('hidden')

    // formDeleteMessage pan -> hide it!
    formDeleteMessage.classList.add('hidden')

    // show homepage!
    homepage.classList.remove('hidden')
    location.hash = 'home'
}

// form deletion handling...
// this function will take (form)-id, and will remove that form from homepage!
function deleteForm(id) {
    // pehla to... form-id lev, to access the div element created!
    const formItem = document.getElementById(`form-${id}`)
    console.log(formItem)
    if (formItem) {
        formItem.remove()
    }

    formExists = false
    formWasDeleted = true
    showDeleteMessage()
    // after deleting the "form" from form-list from "homepage", if user goes back using browser back button toh...
    location.hash = `deleted-form-${id}`
}

// message simply hide it, after 1.5 second!
function showDeleteMessage() {
    // show message
    formDeleteMessage.classList.remove('hidden')
    setTimeout(() => {
        // hide message
        formDeleteMessage.classList.add('hidden');
    }, 1500)
}

// handling routing on hash change!
window.addEventListener('hashchange', (event) => {
    // first, if form doesn't exist or form is deleted and user navigates back to base URL or homePage...
    if (!formExists && formWasDeleted && (location.hash === '' || location.hash === '#home' || location.hash === '#form-created')) {

        // show homepage and message deleted!
        homepage.classList.remove('hidden')
        showDeleteMessage();
    }
});
