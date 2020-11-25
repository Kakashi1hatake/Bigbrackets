if(localStorage.getItem('data')){
    const data = JSON.parse(localStorage.getItem('data'))
      document.getElementById('name').innerText = data.name
      document.querySelector('#email').innerText = data.email
      document.querySelector('#phone').innerText = data.phone
      document.querySelector('#city').innerText = data.city
      document.querySelector('#country').innerText = data.country
      document.getElementById('arrival').date = data.arrival   
      document.querySelector('#depart').innerText = data.depart
      document.querySelector('#people').innerText = data.people
      document.querySelector('#room').innerText = data.room
      document.querySelector('#roomn').innerText = data.roomn
  }

  function approve(){
    if(localStorage.getItem('data')){
      const data = JSON.parse(localStorage.getItem('data'))
      data.approve = true
      data.decline = false

      localStorage.setItem('data', JSON.stringify(data))
    }
  }

  function decline(){
    if(localStorage.getItem('data')){
      const data = JSON.parse(localStorage.getItem('data'))
      data.decline = true
      data.approve = false

      localStorage.setItem('data', JSON.stringify(data))
    }
  }