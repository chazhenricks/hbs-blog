var blogPosts = [
{
  title: "NSS - Week 1",
  date: "April 8, 2017",
  copy:
    "I feel like I have acomplished a lot this week. I have gone from a <em> very </em> limited use of the terminal to doing most of the work at school from the command line. I have realized that I retained far more of the pre-work in HTML and CSS than I thought I did. I have successfually been able to help some fellow classmates with problems that further cemented some of the concepts in memory. On Friday I joind a group of 5 other people to try and tackle one of the first group projects, probably a bit ambitiously. Even though we did not get the Tic Tac Toe game operational, we did learn a tremendous ammount about integrating Git and Github in a team setting. After a few accidental push-to-masters, some confusion with merge conflits, and realizing that you havent been working from the current master I think we learned more about planning and team work than we did getting a functioning product, which I dont think is a bad thing at all. All in all I think week 1 at NSS has pushed me to learn to ask help from peers and realize that even though I know more than I thought I did, there is <em> a lot </em> I dont know. And that the community here is more helpful and inviting than I had expected.",
  author: "Chaz Henricks"

},
{
  title: "NSS - Week 2",
  date: "April 15, 2017",
  copy:
  "This week help me solidify some more knowledge of CSS styling with flexbox as well as learning more about how to work in groups. My very limited knowledge of Flexbox turned into teaching classmates how to used my limited knowledge of flexbox. Because I was helping others I was constantly having to look up the documentation to find answers to questions and problems which further solidified the different properties and values and how to use them. I went from being very vaguely familiar to having a pretty good grasp on how to do layouts using flexbox. This week also served as more good experience with working in groups. I'm still figuring out how to best handle GihHub, tickets and merge issues, but I know I am in a much better place at the end of this week than I was last week.",
  author: "Chaz Henricks",
},
{
  title: "NSS - Week 3",
  date: "April 24, 2017",
  copy:
  "This week at NSS had started to stretch more of what I have learned than the last two weeks have. This was the first week where some of the exercises were pushing me to abstractly put together pieces of knowledge to solve a problem. Most noteably on an exercise labeled 'WYSIWYG'. Essentially the exercise had you create and array of objects thst contained facts about famous people. When you clicked on one of the name titles, your cursor is focused on an input box and what you type into the input will dynamically replace the bio section of the name you clicked, and only the name you clicked. Since the site was suppsoed to be dynamic I gave everything classes once they are written to the DOM from Javascript. The hardest part was figuring out how to assign the EvenetListeners on each name as it is created as well as link the text input to that specific bio. Originally I was using a path like 'event.tatger.parentChild.parentChild.siblingElement.childNode.childNode to connect everything. Both Brenda and Gref pointed ou that this is a very fragile way to write things. If there happens to be any more elements added to a post in the future the entire thing falls apart. Brenda had suggested using the 'closest()' selector. I was having trouble getting this method to grab what I wanted. Greg had suggested using the 'querySelector()' method. Again I was having trouble getting Javascript to select exactly what I wanted. Then something dawned on me - 'closest()' doesnt like selecting cousin elements, but it will select parents and grandparents quite easlily. And 'querySelector()' can select all the classes on the document <i> or </i> within a certain tree you tell it to look in. So on each event listener on click sets the target to be the grandparent of the item selected and then the first class that named 'famous-bio' inside of that grandparent. This lets you change up the format of the famous persons bio however you like while still working as expected as long as nothing else shares the specifc class of 'famous-bio' within that tree. This lets you add as many famous people cards and additional info as you so choose and maintain the same usability.",
  author: "Chaz Henricks",
},
];

var container = document.getElementById("container");
var links = document.getElementById("list-group");

for (var i=0;i<blogPosts.length;i++){
  var posts =
    `<article class ="container-fluid">
      <header class="page-header">
        <h3 class="">${blogPosts[i].date}</h3>
        <h2 id ="post${i}">${blogPosts[i].title} </h2>
      </header>
      <section class="">
        ${blogPosts[i].copy}
      </section>
      <footer class="">
        <p class="">Written By - ${blogPosts[i].author}
      </footer>
    </article>`;

  var linkContent =
  `<a href="#post${i}" class="list-group-item">
    <h4 class ="list-group-item-heading">${blogPosts[i].title}</h4>
    <p class ="list-group-item-text">${blogPosts[i].author}</p>
   </a>
  `

container.innerHTML += posts;
links.innerHTML += linkContent;

};








