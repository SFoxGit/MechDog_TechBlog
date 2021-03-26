const newBlogText = document.querySelector('.blogText');
const form = document.querySelector(".update-form");

const blogUpdate = async (event) => {
  await event.preventDefault();
  const message = JSON.stringify({ "message": newBlogText.value });
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
    location.reload();
  } else {
    console.log('failed to update blog')
  }
}


form.addEventListener('submit', blogUpdate)
document.querySelector('#newBlog').addEventListener('click', (event) => {
  event.preventDefault();
  document.location.replace('/newBlog')
})