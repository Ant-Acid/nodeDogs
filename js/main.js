
document.querySelector('button').addEventListener('click', getDog)

function getDog() {
    
    document.querySelector("#dogPic").classList.remove("hidden")
    let random = Math.floor(Math.random() * 11)

    let imgArray = new Array();
    imgArray[0] = new Image();
    imgArray[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzCc4_HnkhhWPouqsYT42QDguYx2Qwjzrlg&usqp=CAU"
    imgArray[1] = new Image();
    imgArray[1].src = "https://media.distractify.com/brand-img/IPJP2rGdp/0x0/walterthedog-1592229773475.jpg"
    imgArray[2] = new Image();
    imgArray[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfgcY6LMkz0tCBNnPYjlewTK4ZArUOmg-LBQ&usqp=CAU"
    imgArray[3] = new Image();
    imgArray[3].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSK1MRvKytrX7sqeX3Imrf_zUZILVDC7YBow&usqp=CAU"
    imgArray[4] = new Image();
    imgArray[4].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0SCBXe6L6EJcnzpP2Zz6ha9WuuMxw6mLwg&usqp=CAU"
    imgArray[5] = new Image();
    imgArray[5].src = "https://cdnb.artstation.com/p/assets/images/images/037/564/819/large/brandon-mcdonald-meme-dog-copy2.jpg?1620717279"
    imgArray[6] = new Image();
    imgArray[6].src = "https://cdn.shopify.com/s/files/1/2248/0831/files/dog-with-hat-meme-5.png?16882484362488472052%0A"
    imgArray[7] = new Image();
    imgArray[7].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3pfKXjlFJ6nw1NP5BYIT-JKDRuT6ljSEZw&usqp=CAU"
    imgArray[8] = new Image();
    imgArray[8].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxdusJCVOjr-frDT5_4-dLwAVwDbtQ2mswA&usqp=CAU"
    imgArray[9] = new Image();
    imgArray[9].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQty0YhoST-fgItNHOfklboSsSci_Z6cF7BQ&usqp=CAU"
    imgArray[10] = new Image();
    imgArray[10].src = "https://c.tenor.com/ASu-0HZkvgkAAAAd/dog-meme.gif"
    document.getElementById("dogPic").src = imgArray[random].src;


}