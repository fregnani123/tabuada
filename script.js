function tabuada (){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0 )
    {alert('Por favor digite um numero')
 } else { let n = Number(num.value)
          let c = 1
          tab.innerHTML = ""
           
         while (c <= 10){let item = document.createElement('option')
         item.text = `${n} x ${c} = ${n*c}`
         item.value = `tab${c}`
         tab.appendChild (item)
            c++
         }

         }
           

}