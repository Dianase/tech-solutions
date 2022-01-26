//to initialize units when using the API integration 
//create an array of units with the unit type and selectorId of tag where it will be inserted
var pwUnits = [
    {
      selectorId: 'lobby_top',
      type: 'leaderboard_atf'
    },
    {
      selectorId: 'lobby_bottom',
      type: 'leaderboard_btf'
    },
    {
      selectorId: 'lobby_sticky_bottom_mobile',
      type: 'leaderboard_btf'
    },
    {
      selectorId: 'game_skyscraper_desktop',
      type: 'sky_atf'
    },
    {
      selectorId: 'game_sticky_bottom_mobile',
      type: 'sky_btf'
    },
]
//create a function that in the case of SPA will first detroy any units left on the page 
//after removing it will use the addUnits method and will take the array of units created
//finaly it will take thos units and display them on the page 
ramp.destroyUnits('all').then(()=> {
    ramp.addUnits(pwUnits).then(()=>{
        ramp.displayUnits()
    })
}).catch(e => console.log(e))