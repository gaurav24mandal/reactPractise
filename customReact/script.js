  const reactElemnt  ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "cick me   i m in kook "
    
  } 
 function customRender(reactElemnt,container){
    const domLEement = document.createElement(reactElemnt.type);
    domLEement.innerHTML = reactElemnt.children ;
     for (const prop in  reactElemnt.props) {
          if(prop === 'children') continue;
          domLEement.setAttribute(prop,reactElemnt.props[prop])
     }
     container.appendChild(domLEement)
 }
 
    
 const mainContaner  = document.querySelector('#kook') ;
 customRender(reactElemnt,mainContaner)