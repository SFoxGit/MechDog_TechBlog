const newBlogText = document.querySelector('.blogText');
const form = document.querySelector(".update-form");

const postComment = async () => {
  const message = await JSON.stringify({ "message": newBlogText.value, "blogId": form.getAttribute('id') });

  const updateBlog = await fetch(`/api/comments`, {
    method: 'POST',
    body: message,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (updateBlog.ok) {
    console.log('okay');
    document.location.reload()
  } else {
    console.log('failed to update blog')
  }
}
console.log(form.getAttribute('id'))

form.addEventListener('submit', postComment)