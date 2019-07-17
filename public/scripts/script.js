const postDatabase = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": '<script>alert("MWAHAHAHAHAHA")</script>',
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]

const createPostElement = (postObject) => {

  // Creation of the elements

  let $post_container = $('<article>')
  let $post_title = $('<h1>')
  let $post_author = $('<h2>')
  let $post_content = $('<p>')
  let $post_postedon = $('<p>')

  // Class & id assignement

  $post_container.addClass('super_single_post')
  $post_container.attr('id',`post_${postObject.id}`)

  // Adding content to my elements

  $post_title.text(postObject.title)
  $post_author.html(`<strong>By:</strong> ${postObject.userId}`)
  $post_content.text(postObject.body)
  $post_postedon.text(`Posted on: Before the one after`)

  //Build my element

  $post_container
    .append($post_title)
    .append($post_author)
    .append($post_content)
    .append($post_postedon)

  // Return the built element

  return $post_container
}

const renderPosts = (listOfPosts, target) => {
  for (const post of listOfPosts) {
    $(target).append(createPostElement(post))
  }
}

const areWeThereYet = () => {
  const heightOfDocument = $(document).innerHeight()
  const amountViewed = $(window).innerHeight() + $(document).scrollTop()
  console.log(heightOfDocument, amountViewed)
  return (heightOfDocument - 20 - amountViewed < 0)
}

$(document).ready(() => {
  console.log(createPostElement(postDatabase[0]))

  //Looping through my local array of objects called postDatabase

  // for(const post of postDatabase){
  //   $('.bunch_of_posts').append(createPostElement(post))
  // }

  // Content from this address : http://jsonplaceholder.typicode.com/posts

  // $.get('http://jsonplaceholder.typicode.com/posts')
  //   .then(posts => renderPosts(posts, '.bunch_of_posts'))
  //   .fail(error => console.error(error))

  // const iAmAFunction = () => {}
  // const calculateAreaOfCoveragePerMeterInTheSystemOfLifeAndStuff = () => {}

  // Fetching the posts when the DOM is ready
  $.ajax({
    method:"GET",
    url:"http://jsonplaceholder.typicode.com/posts"
  })
    .then(posts => renderPosts(posts, '.bunch_of_posts'))
    .fail(error => console.error(error))

  // Fetching the posts when the button is double clicked
  $('#load_more').dblclick(() => {
    $.get('http://jsonplaceholder.typicode.com/posts')
      .then(posts => renderPosts(posts, '.bunch_of_posts'))
      .fail(error => console.error(error))
  })

  // Fetching the posts when the end of the page is reached
  $(document).scroll(() => {
    if (areWeThereYet()) {
      $.get('http://jsonplaceholder.typicode.com/posts')
        .then(posts => renderPosts(posts, '.bunch_of_posts'))
        .fail(error => console.error(error))
    }
  })

  // Fetching html content and prepending it directly in the page
  
  $.get('/funky.html').then(response => $('body').prepend(response))

})