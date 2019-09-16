(window.webpackJsonpsteven_wing=window.webpackJsonpsteven_wing||[]).push([[0],{13:function(e,t,a){e.exports=a(35)},18:function(e,t,a){},19:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),o=(a(18),a(1)),s=a(2),c=a(4),m=a(3),u=a(5),h=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).setActive=function(e){e.preventDefault();var t=e.target.id;"inactive-tab"===a.state[t]&&("portfolio"===t?(a.setState({portfolio:"active-tab",resume:"inactive-tab"}),a.props.setActive("portfolio")):(a.setState({portfolio:"inactive-tab",resume:"active-tab"}),a.props.setActive("resume")))},a.state={portfolio:"inactive-tab",resume:"active-tab"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.showPortfolio&&this.setState({portfolio:"active-tab",resume:"inactive-tab"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"top-bar"},l.a.createElement("span",{className:"my-name"},"Steven Wing"),"active-tab"===this.state.resume&&l.a.createElement("a",{className:"printable",target:"_blank",href:"Steven Wing - Resume.pdf"},l.a.createElement("i",{className:"fas fa-print"})," Printable R\xe9sum\xe9"),l.a.createElement("button",{id:"resume",className:this.state.resume,onClick:this.setActive},"R\xe9sum\xe9"),l.a.createElement("button",{id:"portfolio",className:this.state.portfolio,onClick:this.setActive},"Portfolio"))}}]),t}(n.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",{className:"contact-cent"},"Steven Wing"),l.a.createElement("h2",{className:"contact-cent"},l.a.createElement("em",null,"Full Stack Web Developer")),l.a.createElement("div",{className:"contact-box"},l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("i",{className:"far fa-envelope"}," "),l.a.createElement("a",{href:"mailto: Steven.Thomas.Wing@gmail.com"},"Steven.Thomas.Wing@gmail.com")),l.a.createElement("h3",null,l.a.createElement("i",{className:"fas fa-mobile-alt"}," "),l.a.createElement("a",{href:"tel:+1236-558-3609"},"236-558-3609")),l.a.createElement("h3",null,l.a.createElement("i",{className:"fab fa-github"}," "),l.a.createElement("a",{href:"https://github.com/DraconianLore"},"DraconianLore")),l.a.createElement("h3",null,l.a.createElement("i",{className:"fab fa-linkedin"}," "),l.a.createElement("a",{href:"https://www.linkedin.com/in/steven-wing"},"Steven-Wing")))))}}]),t}(n.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"section"},l.a.createElement("h1",{className:"heading"},"About me"),l.a.createElement("p",null,"Following my love for technology that began in my early years, playing around on a Commodore 64/128, getting excited over changing the background colour of the computer screen. As I grew, so did my curiosity, I began playing with games creating mods, creating simple web pages, and even making simple games using tools such as Unity. Now, having the opportunity to change that inquisitive nature into a career, learning as much as possible along the way, I am embracing the future with an open mind, ready to tackle any challenge thrown my way."))}}]),t}(n.Component),g=["JavaScript","HTML","CSS","SASS","Node.js","jQuery","VB","React","Ruby","Rails","React Native","Unity","C#","Bootstrap"],E=["Git","GitHub","Bitbucket","MongoDB","MySql","PostgreSQL","Expo","Heroku","Trello"],b=["Adaptable","Flexible","Problem Solving","Leadership","Teamwork"],f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=g.map((function(e){return l.a.createElement("div",{key:e,className:"skill-item"},e)})),t=E.map((function(e){return l.a.createElement("div",{key:e,className:"skill-item"},e)})),a=b.map((function(e){return l.a.createElement("div",{key:e,className:"skill-item"},e)}));return l.a.createElement("div",{className:"section"},l.a.createElement("h1",{className:"heading"},"Skills"),l.a.createElement("h4",{className:"sub-heading"},"Languages & Frameworks"),l.a.createElement("div",{className:"skill-list"},e),l.a.createElement("h4",{className:"sub-heading"},"Systems & Databases"),l.a.createElement("div",{className:"skill-list"},t),l.a.createElement("h4",{className:"sub-heading"},"General SKills"),l.a.createElement("div",{className:"skill-list"},a))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"section wider"},l.a.createElement("h1",{className:"heading"},"Relevant Experience"),l.a.createElement("hr",{className:"exp-hr"}),l.a.createElement("h4",{className:"sub-heading"},"Completed Projects"),l.a.createElement("ul",{className:"res-description",onClick:this.props.showPortfolio},l.a.createElement("a",{href:"#",alt:"View portfolio"},l.a.createElement("li",null,l.a.createElement("strong",null,"\u039a\u03bf\u1fd6\u03bf\u03c2")," - ",l.a.createElement("em",null,"An immersive mobile game made with React native and Ruby-on-Rails")),l.a.createElement("li",null,l.a.createElement("strong",null,"ChattyApp")," - ",l.a.createElement("em",null,"An anonymous chatroom made with React and NodeJs")),l.a.createElement("li",null,l.a.createElement("strong",null,"Conligo")," - ",l.a.createElement("em",null,"A 'smart' todo list made with NodeJs and Express")))),l.a.createElement("h4",{className:"sub-sub-heading portfolio-link"},l.a.createElement("a",{href:"#",alt:"view protfolio",onClick:this.props.showPortfolio},"View My Portfolio")),l.a.createElement("h4",{className:"sub-heading"},"Finalist",l.a.createElement("span",{className:"right-side"},"September 13-15, 2019")),l.a.createElement("h4",{className:"sub-sub-heading"},l.a.createElement("a",{href:"https://vanhacks.com/"},"Vanhacks 2019"),l.a.createElement("span",{className:"right-side"},"Vancouver, BC, Canada")),l.a.createElement("ul",{className:"res-description"},l.a.createElement("li",null,"Finalists in the ",l.a.createElement("a",{href:"https://vanhacks.com/"},l.a.createElement("strong",null,l.a.createElement("em",null,"2019 Vanhacks < For social good >"))," "),"hackathon."),l.a.createElement("li",null,"Created a platform for non-profit organisations to connect with IT specialists")),l.a.createElement("p",null,l.a.createElement("em",null,"Worked with a team to create a solution to allow NPO's to list their needs such as 'we need a website' for developers/designers to donate their time and experience to help out in the community.")),l.a.createElement("h4",{className:"sub-heading"},"Logistics Manager",l.a.createElement("span",{className:"right-side"},"Feb 2016 - Dec 2018")),l.a.createElement("h4",{className:"sub-sub-heading"},"Big Mouth Foods Pty Ltd ",l.a.createElement("span",{className:"right-side"},"Sydney, NSW, Australia")),l.a.createElement("ul",{className:"res-description"},l.a.createElement("li",null,"Coordinated a team of six drivers delivering cold foods to customers across the NSW and ACT states."),l.a.createElement("li",null,"Trained new drivers"),l.a.createElement("li",null,"Managed inventory and coordinated with the production team."),l.a.createElement("li",null,"Dealt directly with existing and potential clients and resolving customer complaints.")),l.a.createElement("p",null,l.a.createElement("em",null,"During my time at Big Mouth, I refined my time management skills, and learnt a lot from stepping back to see the big picture to coordinate multiple people efficiently.")))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"section wider"},l.a.createElement("h1",{className:"heading"},"Relevant Education"),l.a.createElement("hr",{className:"exp-hr"}),l.a.createElement("h4",{className:"sub-heading"},"Diploma in Web Development",l.a.createElement("span",{className:"right-side"},"May 2019 - August 2019")),l.a.createElement("h4",{className:"sub-sub-heading"},"Lighthouse Labs",l.a.createElement("span",{className:"right-side"},"Vancouver, Canada")),l.a.createElement("p",{className:"res-description"},"A full-time immersive full-stack web development program covering topics such as Javascript, jQuery, HTML, CSS, SASS, MongoDB, PostgreSQL, React, NodeJs, Ruby, and Ruby on Rails."),l.a.createElement("ul",{className:"res-description",onClick:this.props.showPortfolio},l.a.createElement("h4",{className:"sub-sub-heading mini-heading"},"Projects"),l.a.createElement("a",{href:"#",alt:"View portfolio"},l.a.createElement("li",null,l.a.createElement("strong",null,"\u039a\u03bf\u1fd6\u03bf\u03c2")," - ",l.a.createElement("em",null,"An immersive mobile game made with React native and Ruby-on-Rails")),l.a.createElement("li",null,l.a.createElement("strong",null,"Jungle")," - ",l.a.createElement("em",null,"An eCommerce application made with Ruby-on-Rails")),l.a.createElement("li",null,l.a.createElement("strong",null,"ChattyApp")," - ",l.a.createElement("em",null,"An anonymous chatroom made with React and NodeJs")),l.a.createElement("li",null,l.a.createElement("strong",null,"Conligo")," - ",l.a.createElement("em",null,"A 'smart' todo list made with NodeJs and Express")),l.a.createElement("li",null,l.a.createElement("strong",null,"Tweeter")," - ",l.a.createElement("em",null,"A twitter clone SPA made with NodeJs and Express")))),l.a.createElement("p",null,l.a.createElement("em",null,"This course allowed me to change my programming hobby into a qualification. For 12 hours a day, 6 days a week I was fully immersed in absorbing knowledge through hands on exercises and project work.")))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"resume-page"},l.a.createElement("div",{className:"resume-page"},l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(d,null)),l.a.createElement("div",{className:"resume-page"},l.a.createElement(v,{showPortfolio:this.props.showPortfolio}),l.a.createElement(y,{showPortfolio:this.props.showPortfolio})))}}]),t}(n.Component),k=a(12),j=a.n(k),N=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/DraconianLore/Koios",target:"_blank",rel:"noopener noreferrer",className:"portfolio-github-link"},l.a.createElement("h1",null,"\u039a\u03bf\u1fd6\u03bf\u03c2"),l.a.createElement("h4",null,"An immersive mobile game"),l.a.createElement("br",null),l.a.createElement("img",{src:"images/koios.png",alt:"Koios"})),l.a.createElement("p",null,"\u039a\u03bf\u1fd6\u03bf\u03c2 is an immersive game where users enlist as agents in a secret organization where they are encouraged to take a break from their daily lives and complete missions by interacting with the world around them. Initially users are presented with baisc 'training' missions to build up trust within the organisation, taking photos of objects, taking selfies with other people or places, and sending them off to be verified by other agents(including new agents)"),l.a.createElement("ul",null,"As the agents gain trust, they gain ranks in the organisation which leads to harder missions including:",l.a.createElement("li",null,"Encryption missions - where the agent is given a word or phrase and must encrypt it using a type of cypher provided."),l.a.createElement("li",null,"Decryption missions - where the agent is given an encrypted message and must discover the type of encryption used and decypher the message."),l.a.createElement("li",null,"To be implemented in later updates"),l.a.createElement("li",null,"Dead-drop missions - where the agent must write out or print a message and leave it in a location where another agent will come to pick it up."),l.a.createElement("li",null,"Handoff missions - where the agent must meet another agent and secretly hand them a message."),l.a.createElement("li",null,"Advanced decryption missions - where the agent recieves an image, sound clip, or video clip and must find a message hidden in the file.")),l.a.createElement("ul",{className:"tech-stack"},l.a.createElement("span",{className:"ts-header"},"Tech Stack:"),l.a.createElement("li",null,"React Native"),l.a.createElement("li",null,"Ruby-on-Rails"),l.a.createElement("li",null,"PostgreSQL"),l.a.createElement("li",null,"Heroku(hosting)")))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/wonseobshin/conligo",target:"_blank",rel:"noopener noreferrer",className:"portfolio-github-link"},l.a.createElement("h1",null,"Conligo"),l.a.createElement("h4",null,"A Smart Todo List"),l.a.createElement("br",null),l.a.createElement("img",{src:"images/conligo.png",alt:"Conligo"})),l.a.createElement("p",null,'This "Smart Todo List" categorizes items the user inputs into one of four categories by using various API calls to find out what the item is. The majority of this project was pair programmed.'),l.a.createElement("ul",{className:"tech-stack"},l.a.createElement("span",{className:"ts-header"},"Tech Stack:"),l.a.createElement("li",null,"NodeJS"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"Sass"),l.a.createElement("li",null,"PostgreSQL")))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/DraconianLore/chattyApp",target:"_blank",rel:"noopener noreferrer",className:"portfolio-github-link"},l.a.createElement("h1",null,"ChattyApp"),l.a.createElement("h4",null,"An anonymous chatroom"),l.a.createElement("br",null),l.a.createElement("img",{src:"images/chattyapp.png",alt:"ChattyApp"})),l.a.createElement("p",null,"A compact Anonymous chatroom."),l.a.createElement("ul",null,"Upon entering the chatroom each user is assigned a random name based on an animal ie: Anonymous Crocodile. Users can:",l.a.createElement("li",null,"Change their name"),l.a.createElement("li",null,"Change the colour of their name and messages"),l.a.createElement("li",null,"Post an image/meme from a URL"),l.a.createElement("li",null,"Type /me does something to send a notification of [username] does something"),l.a.createElement("li",null,"Add emoji to their messages"),l.a.createElement("li",null,"See how many users are connected, and get notifications when people join or leave"),l.a.createElement("li",null,"Get browser notifications when someone sends a message"),l.a.createElement("li",null,"Share a URL link")),l.a.createElement("ul",{className:"tech-stack"},l.a.createElement("span",{className:"ts-header"},"Tech Stack:"),l.a.createElement("li",null,"NodeJS"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Sass"),l.a.createElement("li",null,"Websockets")))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/DraconianLore/jungle-rails",target:"_blank",rel:"noopener noreferrer",className:"portfolio-github-link"},l.a.createElement("h1",null,"Jungle"),l.a.createElement("h4",null,"An e-Commerce application"),l.a.createElement("br",null),l.a.createElement("img",{src:"images/jungle.png",alt:"Jungle"})),l.a.createElement("p",null,"I took this project from a template of A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example, riddled with bugs and terrible design to where it is now, learning ruby on rails in the week I worked on this project.        "),l.a.createElement("ul",{className:"tech-stack"},l.a.createElement("span",{className:"ts-header"},"Tech Stack:"),l.a.createElement("li",null,"Ruby-on-Rails"),l.a.createElement("li",null,"Sass"),l.a.createElement("li",null,"PostgreSQL")))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/DraconianLore/tweeter",target:"_blank",rel:"noopener noreferrer",className:"portfolio-github-link"},l.a.createElement("h1",null,"Tweeter"),l.a.createElement("h4",null,"A Twitter Clone"),l.a.createElement("br",null),l.a.createElement("img",{src:"images/tweeter.png",alt:"Tweeter"})),l.a.createElement("p",null,"A single-page AJAX-based Twitter clone"),l.a.createElement("ul",{className:"tech-stack"},l.a.createElement("span",{className:"ts-header"},"Tech Stack:"),l.a.createElement("li",null,"NodeJS"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"MongoDB")))}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Current Projects"),l.a.createElement("hr",{className:"project-hr"}),l.a.createElement("h4",null,l.a.createElement("a",{className:"port-link",href:"https://github.com/alumni-lab/quote-chat",target:"_blank",rel:"noopener noreferrer"},"Quote-Chat")),l.a.createElement("p",null,l.a.createElement("em",null,"A Movie-quote Slack application")),l.a.createElement("p",{className:"port-current"},"Working with several Lighthouse Alumni on this project, involving a script scraper(python) a PostgreSQL database hosted on Heroku along with the main Slack app(Nodejs)"),l.a.createElement("hr",{className:"project-hr"}),l.a.createElement("h4",null,l.a.createElement("a",{className:"port-link",href:"https://github.com/rsmsnot/Sports-Guide",target:"_blank",rel:"noopener noreferrer"},"Sports Guide")),l.a.createElement("p",null,l.a.createElement("em",null,"A Sports guide/fixture list application")),l.a.createElement("p",{className:"port-current"},"Working with a small team on this project, designed to display the times and which TV channel it will be showing on in your country."),l.a.createElement("hr",{className:"project-hr"}),l.a.createElement("h4",null,l.a.createElement("a",{className:"port-link",href:"https://github.com/DraconianLore/dmPlayerTracker",target:"_blank",rel:"noopener noreferrer"},"DM Player Tracker")),l.a.createElement("p",null,l.a.createElement("em",null,"A Dungeons & Dragons Player tracker for Dungeon Masters")),l.a.createElement("p",{className:"port-current"},"My personal project, where as an avid D&D player, and semi-regular Dungeon Master, I decided it would be nice to have an app to track player information for my players. Using React and Rails with a PostgreSQL database I am actively working on this project."),l.a.createElement("hr",{className:"project-hr"}),l.a.createElement("h1",null,"Open Source Contributions"),l.a.createElement("hr",{className:"project-hr"}),l.a.createElement("h4",null,l.a.createElement("a",{className:"port-link",href:"https://github.com/publiclab/mapknitter",target:"_blank",rel:"noopener noreferrer"},"Mapknitter")),l.a.createElement("p",null,l.a.createElement("em",null,"An open source image(aerial) to map joining application")))}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(j.a,{dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1},l.a.createElement(N,null),l.a.createElement(A,null),l.a.createElement(S,null),l.a.createElement(O,null),l.a.createElement(C,null),l.a.createElement(P,null)))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).showPortfolio=function(){a.setState({showPortfolio:!0,activePage:"portfolio"})},a.setActive=function(e){a.setState({activePage:e,showPortfolio:!1})},a.state={activePage:"resume",showPortfolio:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{setActive:this.setActive,showPortfolio:this.state.showPortfolio}),"portfolio"===this.state.activePage&&l.a.createElement(R,null),"resume"===this.state.activePage&&l.a.createElement(w,{showPortfolio:this.showPortfolio}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b1766bc1.chunk.js.map