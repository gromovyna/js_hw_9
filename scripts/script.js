
    logo = ["images/clubs.svg","images/spades.svg","images/diamonds.svg","images/hearts.svg"]
    title=[ "J","Q","K","T"]
    logoPerson = ["images/jack.svg","images/queen.svg","images/king.svg","images/spades.svg"]
    document.write(`
    <div class="wrapper">`)
    for(i = 2; i<=10; i++){
        document.write(`
        <div class="card">
			<div class="card__info">${i}<img src=${logo[0]} alt="clubs"></div>
			<div class="card__info">${i}<img src=${logo[0]} alt="clubs"></div>
		</div>
        <div class="card">
			<div class="card__info">${i}<img src=${logo[1]} alt="spades"></div>
			<div class="card__info">${i}<img src=${logo[1]} alt="spades"></div>
		</div>
        <div class="card">
			<div class="card__info">${i}<img src=${logo[2]} alt="diamonds"></div>
			<div class="card__info">${i}<img src=${logo[2]} alt="diamonds"></div>
		</div>
        <div class="card">
			<div class="card__info">${i}<img src=${logo[3]} alt="hearts"></div>
			<div class="card__info">${i}<img src=${logo[3]} alt="hearts"></div>
		</div> `
      )
    }
     for(j = 0; j<3; j++){
         document.write(`
         <div class="card card--person">
            <div class="card__info">${title[j]}<img src=${logo[0]} alt="clubs"></div>
            <img class="person" src=${logoPerson[j]} alt="clubs">
            <div class="card__info">${title[j]}<img src=${logo[0]} alt="clubs"></div>
        </div>
        <div class="card card--person">
        <div class="card__info">${title[j]}<img src=${logo[1]} alt="clubs"></div>
        <img class="person" src=${logoPerson[j]} alt="clubs">
        <div class="card__info">${title[j]}<img src=${logo[1]} alt="clubs"></div>
     </div>
     <div class="card card--person">
        <div class="card__info">${title[j]}<img src=${logo[2]} alt="clubs"></div>
        <img class="person" src=${logoPerson[j]} alt="clubs">
        <div class="card__info">${title[j]}<img src=${logo[2]} alt="clubs"></div>
     </div>
     <div class="card card--person">
     <div class="card__info">${title[j]}<img src=${logo[3]} alt="clubs"></div>
     <img class="person" src=${logoPerson[j]} alt="clubs">
     <div class="card__info">${title[j]}<img src=${logo[3]} alt="clubs"></div>
  </div>
         `)
     }
     for(s = 0; s<4; s++){
        document.write(`
        <div class="card card--person">
           <div class="card__info">${title[3]}<img src=${logo[s]} alt="clubs"></div>
           <img class="person" src=${logo[s]} alt="clubs">
           <div class="card__info">${title[3]}<img src=${logo[s]} alt="clubs"></div>
       </div>`)
     }
    document.write(` </div>`)
    