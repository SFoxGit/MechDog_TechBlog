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

form.addEventListener('submit', postComment)

const getId = document.querySelectorAll('.userId')
const sessionId = document.querySelector('button').dataset.id

getId.forEach(function(userID) {
  if (userID.dataset.userid === sessionId) {
    userID.innerHTML = `<button class="delete" type="click">X</button>`;
    // const deleteComment = document.querySelectorAll('.delete');
    const commentID = userID.dataset.commentid
    userID.firstElementChild.addEventListener('click', function() {
      const commentDelete = async (event) => {
        const deleteComment = await fetch(`/api/comments/${commentID}`, {
          method: 'DELETE',
        })
        if (deleteComment.ok) {
          document.location.reload()
        } else {
          console.log('failed to delete')
        }
      }
      commentDelete();
    })
  }
})

