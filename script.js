
fetch('data.json') // Path relative to your web server
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let json = Object.keys(data)
    //    console.log(json.length)

    for (let index = 1; index <= json.length; index++) {
      let info = data[String(index)]
      let num = Object.keys(info.maintitle)
      console.log("info", info)
      document.querySelector(".main-cards").innerHTML +=
        `
    <h2 class="main-cards-title">${info.maintitle.title}</h2>
`

      for (let i = 1; i < num.length; i++) {
        let sec = info.maintitle[String(i)]

        console.log("sec", sec)


        document.querySelector(".main-cards").innerHTML +=
          ` 

    <div class="cards">
      <div class="card">
        <div class="card-title">
          <h3>${sec.title}</h3>
          <p>
              ${sec.ph}

          </p>
          
        </div>
        <div class="card-btns">
          <a class="btns" href="${sec.btn1.url}">${sec.btn1.name}</a>
          <a class="btns" href="${sec.btn2.url}">${sec.btn2.name}</a>
          <a class="btns" href="${sec.btn3.url}">${sec.btn3.name}</a>
          
        </div>
        
      </div>

      
    </div>

`
      }
    }

  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });



