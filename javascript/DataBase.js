//All mp3, svg data storage

const data = [
    {name:'a-aahno-nooh', inList:true},
    {name:'aaah', inList:true},
    {name:'amaverjine', inList:true},
    {name:'beepsheep', inList:true},
    {name:'boswer', inList:true},
    {name:'boswerhaha', inList:true},
    {name:'braindamgae', inList:true},
    {name:'choke', inList:true},
    {name:'cvedir', inList:true},
    {name:'davidG', inList:true},
    {name:'diabeetus', inList:true},
    {name:'dkrap', inList:true},
    {name:'enui', inList:true},
    {name:'epe', inList:true},
    {name:'Fart Meme Sound', inList:true},
    {name:'Fart sound effect', inList:true},
    {name:'ga-non', inList:true},
    {name:'gamme', inList:true},
    {name:'grilled', inList:true},
    {name:'heput', inList:true},
    {name:'jépapété', inList:true},
    {name:'Le Monke\'s Fart Sound Effect', inList:true},
    {name:'lotadamej', inList:true},
    {name:'newdog', inList:true},
    {name:'nodontdoit', inList:true},
    {name:'nop', inList:true},
    {name:'Normal Fart Sound Effect.', inList:true},
    {name:'nuaj', inList:true},
    {name:'ogpt', inList:true},
    {name:'ogpt2', inList:true},
    {name:'ogpt3', inList:true},
    {name:'pet1', inList:true},
    {name:'pet2', inList:true},
    {name:'pet3', inList:true},
    {name:'pet4', inList:true},
    {name:'pet5', inList:true},
    {name:'pet6', inList:true},
    {name:'pet7', inList:true},
    {name:'pet8', inList:true},
    {name:'pet9', inList:true},
    {name:'pet10', inList:true},
    {name:'photo', inList:true},
    {name:'picnic', inList:true},
    {name:'Quick Reverb Fart - Sound Effect (HD)', inList:true},
    {name:'realman', inList:true},
    {name:'sanfe', inList:true},
    {name:'sike', inList:true},
    {name:'spaghet', inList:true},
    {name:'stegosaurus', inList:true},
    {name:'trompet', inList:true},
    {name:'yapadson', inList:true},
    {name:'yeet', inList:true},
    {name:'yrug', inList:true},
    {name:'yt1s.com - Loudest orgasm ever earrape edition WARNING EARRAPE', inList:true}
]

const logos = [
    {name:'playButtonLogo', html:`<svg class="play" version="1.1" width="200" heigth="200"
    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <circle class="play" style="fill:#1FCFC1;" cx="256" cy="256" r="245.801"/>
        <polygon id="playButton" class="play" style="fill:#F2F2F2;" points="195.825,391.629 376.351,256 195.825,120.371 "/>
        <g class="play">
            <path class="play" style="fill:#4D4D4D;" d="M256,512c-68.381,0-132.667-26.628-181.019-74.98C26.628,388.667,0,324.38,0,256
               S26.628,123.333,74.981,74.98C123.333,26.628,187.619,0,256,0s132.667,26.628,181.019,74.98C485.372,123.333,512,187.62,512,256
               s-26.628,132.667-74.981,181.02C388.667,485.372,324.381,512,256,512z M256,20.398C126.089,20.398,20.398,126.089,20.398,256
               S126.089,491.602,256,491.602S491.602,385.911,491.602,256S385.911,20.398,256,20.398z"/>
            <path class="play" style="fill:#4D4D4D;" d="M195.824,401.828c-1.553,0-3.115-0.355-4.557-1.075c-3.458-1.727-5.641-5.26-5.641-9.124V120.371
               c0-3.864,2.185-7.397,5.641-9.124c3.458-1.726,7.593-1.351,10.685,0.97l180.526,135.629c2.564,1.927,4.073,4.948,4.073,8.154
               s-1.508,6.228-4.073,8.154L201.951,399.783C200.15,401.137,197.994,401.828,195.824,401.828z M206.024,140.791v230.418L359.371,256
               L206.024,140.791z"/>
            <path class="play" style="fill:#4D4D4D;" d="M256,473.243c-5.632,0-10.199-4.566-10.199-10.199c0-5.633,4.567-10.199,10.199-10.199
               c52.815,0,102.404-20.633,139.633-58.1c3.973-3.996,10.429-4.015,14.425-0.045c3.995,3.971,4.016,10.428,0.046,14.424
               C369.016,450.471,314.287,473.243,256,473.243z"/>
            <path class="play" style="fill:#4D4D4D;" d="M430.396,377.825c-1.886,0-3.793-0.522-5.498-1.617c-4.741-3.041-6.118-9.351-3.076-14.092
               c1.514-2.36,2.998-4.788,4.411-7.216c2.834-4.867,9.077-6.516,13.945-3.684c4.868,2.833,6.518,9.077,3.684,13.945
               c-1.56,2.681-3.201,5.363-4.873,7.97C437.043,376.168,433.754,377.825,430.396,377.825z"/>
        </g>
   </svg>`},

   {name:'pauseButtonLogo', html:`<svg class="pause" version="1.1" width="200" heigth="200"
   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <circle class="pause" style="fill:#1FCFC1;" cx="256" cy="256" r="245.801"/>
      <g class="pause">
          <rect class="pause" x="168.287" y="120.371" style="fill:#F2F2F2;" width="62.215" height="271.258"/>
          <rect class="pause" x="281.498" y="120.371" style="fill:#F2F2F2;" width="62.215" height="271.258"/>
      </g>
      <g class="pause">
          <path class="pause" style="fill:#4D4D4D;" d="M256,512c-68.38,0-132.667-26.628-181.02-74.981C26.628,388.667,0,324.381,0,256
              S26.628,123.333,74.98,74.981C123.333,26.628,187.62,0,256,0s132.667,26.628,181.02,74.981C485.372,123.333,512,187.619,512,256
              s-26.628,132.667-74.98,181.019C388.667,485.372,324.38,512,256,512z M256,20.398C126.089,20.398,20.398,126.089,20.398,256
              S126.089,491.602,256,491.602S491.602,385.911,491.602,256S385.911,20.398,256,20.398z"/>
          <path class="pause" style="fill:#4D4D4D;" d="M230.502,401.828h-62.215c-5.633,0-10.199-4.567-10.199-10.199V120.371
              c0-5.632,4.566-10.199,10.199-10.199h62.215c5.633,0,10.199,4.567,10.199,10.199v271.258
              C240.701,397.262,236.135,401.828,230.502,401.828z M178.486,381.43h41.817V130.57h-41.817V381.43z"/>
          <path class="pause" style="fill:#4D4D4D;" d="M343.713,401.828h-62.215c-5.633,0-10.199-4.567-10.199-10.199V120.371
              c0-5.632,4.566-10.199,10.199-10.199h62.215c5.633,0,10.199,4.567,10.199,10.199v271.258
              C353.912,397.262,349.346,401.828,343.713,401.828z M291.697,381.43h41.817V130.57h-41.817V381.43z"/>
          <path class="pause" style="fill:#4D4D4D;" d="M256,473.243c-5.633,0-10.199-4.567-10.199-10.199c0-5.632,4.566-10.199,10.199-10.199
              c52.815,0,102.405-20.633,139.634-58.1c3.971-3.996,10.428-4.016,14.424-0.046c3.995,3.972,4.016,10.429,0.045,14.425
              C369.016,450.471,314.287,473.243,256,473.243z"/>
          <path class="pause" style="fill:#4D4D4D;" d="M430.397,377.824c-1.885,0-3.792-0.522-5.496-1.615c-4.742-3.04-6.12-9.35-3.079-14.091
              c1.523-2.374,3.008-4.803,4.413-7.217c2.833-4.87,9.076-6.519,13.945-3.684c4.868,2.833,6.517,9.077,3.684,13.945
              c-1.552,2.667-3.191,5.347-4.872,7.969C437.044,376.167,433.756,377.824,430.397,377.824z"/>
      </g>
      <g class="pause">
            <rect class="pause" id="pauseButton" x="168.287" y="120.371" style="fill:blue;fill-opacity:0;" width="175.426" height="271.258"/>
      </g>
  </svg>`}
]