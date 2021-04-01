const newBlogText = document.querySelector('.blogText');
const form = document.querySelector(".update-form");
const id = form.getAttribute('id')

const blogUpdate = async (event) => {
  // await event.preventDefault();
  console.log(id)
  const message = await JSON.stringify({ "message": newBlogText.value });
  console.log(message);
  const updateBlog = await fetch(`/api/blogs/${id}`, {
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
};

const blogDelete = async (event) => {
  event.preventDefault();
  const deleteBlog = await fetch(`/api/blogs/${id}`, {
    method: 'DELETE',
  })
  if (deleteBlog.ok) {
    document.location.replace('/dashboard')
  } else {
    console.log('failed to delete')
  }
}

form.addEventListener('submit', blogUpdate);
document.getElementById('delete').addEventListener('click', blogDelete);