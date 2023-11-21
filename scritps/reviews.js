const Appetizers = () => {
    const ReviewsContent = document.createElement('div');
    ReviewsContent.setAttribute('class', 'container');
  
    const gallery = document.createElement('div');
    gallery.setAttribute('class', 'gallery');
    gallery.style.display = "flex"
    gallery.style.justifyContent = "center";
    gallery.style.gap = "5px";



    const imageOne = document.createElement('img');
    imageOne.setAttribute("src", "../imgs/fishimg.jpg");
    imageOne.style.height = "200px";
    gallery.appendChild(imageOne);

    const imageTwo = document.createElement('img');
    imageTwo.setAttribute("src", "../imgs/chickenimg.jpg");
    imageTwo.style.height = '200px';
    gallery.appendChild(imageTwo)

    const imageThree = document.createElement('img');
    imageThree.setAttribute("src", "../imgs/barbecueimg.jpg");
    imageThree.style.height = '200px';
    gallery.appendChild(imageThree);


    

    const ReviewsHeader = document.createElement('h1');
    ReviewsHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    ReviewsHeader.innerHTML = 'Appetizers';


    ReviewsContent.appendChild(ReviewsHeader);
    ReviewsContent.appendChild(gallery)

  
    return ReviewsContent;
  };
  
  export default Appetizers;