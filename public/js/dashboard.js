const newBlogText = document.querySelector('.blogText');
const form = document.querySelectorAll(".update-form");

const blogUpdate = async (event) => {
  // await event.preventDefault();
  const id = event.target.getAttribute('id')
  console.log(id)
  const message = await JSON.stringify({ "message": newBlogText.value });
  console.log(message);
  const updateBlog = await fetch(`/api/blogs/${form.getAttribute('id')}`, {
    method: 'PUT',
    body: message,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (updateBlog.ok) {
    console.log('okay');
    document.location.replace('/dashboard')
  } else {
    console.log('failed to update blog')
  }
}


for (const submission of form) {
  submission.addEventListener('click', blogUpdate)
}
document.querySelector('#newBlog').addEventListener('click', (event) => {
  event.preventDefault();
  document.location.replace('/newBlog')
})