const buttons = document.querySelectorAll(".bbb");


const blogUpdate = async (event) => {
  await event.preventDefault();
  console.log(this.getAttribute('form'))
  
  const updateBlog = await fetch(`/api/blogs/${this.getAttribute('form')}`, {
    method: 'PUT',
    body: { "message": this.previousElementSibling.value },
  });
  if (updateBlog.ok) {
    console.log('okay');
    document.reload();
  } else {
    console.log('failed to update blog')
  }
}


document.querySelector(".bbb").addEventListener('submit', blogUpdate)
document.querySelector('#newBlog').addEventListener('click', (event) => {
  event.preventDefault();
  document.location.replace('/newBlog')
})