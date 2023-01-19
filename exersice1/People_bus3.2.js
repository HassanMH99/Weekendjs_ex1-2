function bus(stops){
    let peopleInBus =0;
    for(let i=0;i<stops.length;i++){
        peopleInBus+=stops[i][0];//this to add people in bus
        peopleInBus-=stops[i][1];//this to get off peple in bus
    }
    return peopleInBus;

}
console.log(bus([[10, 0], [3, 5], [5, 8]])); 