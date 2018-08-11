var book = {
	title: "31 Days",
	author: "Written by Anica Lymus",
	number: "31 pages",
	publishDate: "Published on June 9, 2020",
	category: "Category: Life",
	photo: "slack-img.png",
	summary: "This book is about 31 days of my life, come along for the journey. Over the month you will see how I overcome challanges and celebrate the highs. Also, you will see what being an introvert looks like through my eyes!"
}

function seeTheBook(){
	document.getElementById('heading').innerHTML = book.title;
	document.getElementById('image').src = book.photo;	
	document.getElementById('name').innerHTML = book.author;
	document.getElementById('publish').innerHTML = book.publishDate;
	document.getElementById('topic').innerHTML = book.category;
	document.getElementById('number_of').innerHTML = book.number;
	document.getElementById('paragraph').innerHTML = book.summary;	
	};

setTimeout(seeTheBook, 3000);


