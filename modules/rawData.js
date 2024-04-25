
//the html galary section content in object.
const languageData = {
    html:{
        name:'html',
        src:'./resouces/images/icons8-html-logo-48.png',
        author:'Sir Tim Berners-Lee',
        descreption:['HyperText Markup Language or HTML is used to creating structured content for all websites on the WWW.']
    },
    css:{
        name:'css',
        src:'./resouces/images/icons8-css-48.png',
        author:'Håkon Wium Lie',
        descreption:['CSS or Cascading Style Sheets is the language web designers and web developers use to create the look and design of a website.']
    },
    js:{
        name:'js',
        src:'./resouces/images/icons8-javascript-48.png',
        author:'Brendan Eich',
        descreption:['JavaScript is the programming language of the.It breathes life into websites, making them more interactive, interesting to use, and user-friendly.']
    },

    python:{
        name:'python',
        src:'./resouces/images/icons8-python-48.png',
        author:'Guido van Rossum',
        descreption:['Python is one of the most beginner-friendly programming languages out there.If you are new to coding, Python is the perfect for learning the fundamentals of programming.']
    },
    java:{
        name:'java',
        src:'./resouces/images/icons8-java-logo-48.png',
        author:' James Gosling',
        descreption:['Java is one of the most popular and widely-used programming languages in the world. You can use Java for a variety of different projects, from coding Android smartphone apps to building complex desktop applications.']
    }

}

function languageDatas(){
    return languageData;
}
//the heading navigation array and function.
const navs = ['About Me','Projects', 'Skills', 'Contact', 'To Do'];

function getNav(){
 return navs
}

const rawDataPage = {
    languageDatas,
    getNav
}
export default rawDataPage;


