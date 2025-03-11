let inp=document.querySelector('input')
let btn=document.querySelector('#addBtn')
let i=1;

btn.addEventListener('click',(e)=>{
    let listBox=document.getElementById('list')
    e.preventDefault
    if (inp.value=='') {
        alert('Enter the data')
    }else{
        let ul=document.createElement('ul')
        ul.innerHTML=`Task ${i++}: `+inp.value+' '
        listBox.style.paddingRight='10%'

        listBox.appendChild(ul)
        inp.value=''

        let deleteBtn=document.createElement('button')
        deleteBtn.innerText='Delete'

        deleteBtn.addEventListener('click',()=>{
            i--;
            ul.remove()
        })

        let editBtn=document.createElement('button')
        editBtn.innerText='Edit'

        editBtn.addEventListener('click',()=>{
            i--;
            ul.replaceWith()
        })
        ul.appendChild(deleteBtn)
        ul.appendChild(editBtn)
    }
    
})
