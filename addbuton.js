AFRAME.registerComponent('create-buttons',{
    init:function(){
        var button1=document.createElement('button')
        button1.innerHTML='RATE US'
        button1.setAttribute('id','order-summary');
        button1.setAttribute('class','btn btn-warnings')

        var button2=document.createElement('button')
        button2.innerHTML='Order Now'
        button2.setAttribute('id','order-button');
        button2.setAttribute('class','btn btn-warnings')

        var buttonDiv=document.getElementById('button-div')
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
    }
})