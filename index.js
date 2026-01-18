document.addEventListener('click', async(e) =>
{
  const link = e.target.closest('a');
  if (!link||!link.href) {return;}

  e.preventDefault();
  const url = link.href;
  await document.startViewTransition(async() =>{
    const response = await fetch(url);
    const html = await response.text();
    document.body.innerHTML = html;
  });
});   

