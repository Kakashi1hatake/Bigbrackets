const data = JSON.parse(localStorage.getItem('data'))

        if(data){
            document.querySelector('#status').style.display = "block"
            if(!data.approve && !data.decline){
                document.querySelector('#status').innerText = 'Your request is pending,we will reply you within a minute'
            }
            else if(data.approve){
                document.querySelector('#status').innerText = 'Booking Successful. THANKS FOR STAYING WITH US'
            }else if(data.decline){
                document.querySelector('#status').innerText = 'Request Denied. We are housefull For Now ,THANKS FOR CHOOSING US'
            }
        }else{
            document.querySelector('#status').style.display = 'none'
        }